"use server";

import { getCurrentUser } from "@/lib/auth";
import { User } from "@/mongo/models/User";
import { connectDB } from "@/mongo/mongoose";
import Stripe from "stripe";

// твоя функция получения текущего юзера

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function addCardToUser(
    paymentMethodId: string
): Promise<{ success: boolean; message: string }> {
    await connectDB();

    const sessionUser = await getCurrentUser();
    if (!sessionUser) return { success: false, message: "Пользователь не авторизирован" };
    const user = await User.findById(sessionUser.userId);

    if (!user || !user.stripeCustomerId) {
        return { success: false, message: "Пользователь не найден или не имеет stripeCustomerId" };
    }

    // 👉 Привязываем карту к Customer
    await stripe.paymentMethods.attach(paymentMethodId, {
        customer: user.stripeCustomerId,
    });

    // ✅ Сохраняем карту в MongoDB (если еще не сохранена)
    if (!user.savedCards.includes(paymentMethodId)) {
        user.savedCards.push(paymentMethodId);
        await user.save();
    }

    return { success: true, message: "Карта успешно добавлена" };
}

export async function getSavedCards() {
    await connectDB();
    const user = await getCurrentUser();
    if (!user) return [];

    const foundUser = await User.findById(user.userId);

    const cardDetails = await Promise.all(
        foundUser.savedCards.map(async (paymentMethodId: string) => {
            const pm = await stripe.paymentMethods.retrieve(paymentMethodId);
            return {
                id: pm.id,
                brand: pm.card?.brand,
                last4: pm.card?.last4,
                expMonth: pm.card?.exp_month,
                expYear: pm.card?.exp_year,
            };
        })
    );

    return cardDetails;
}

export async function deleteCard(paymentMethodId: string) {
    await connectDB();
    const user = await getCurrentUser();
    if (!user) throw new Error("Not authenticated");

    const foundUser = await User.findById(user.userId);

    // 1. Удаляем карту из Stripe customer
    await stripe.paymentMethods.detach(paymentMethodId);

    // 2. Удаляем карту из MongoDB
    foundUser.savedCards = foundUser.savedCards.filter((id: string) => id !== paymentMethodId);

    await foundUser.save();
}
