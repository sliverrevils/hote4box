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
