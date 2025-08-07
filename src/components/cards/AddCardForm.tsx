"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { addCardToUser } from "@/actions/cards/cards";

// server action

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function AddCardFormWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <AddCardForm />
        </Elements>
    );
}

function AddCardForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;

        setLoading(true);
        setMessage(null);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error || !paymentMethod) {
            setMessage(error?.message ?? "Ошибка при создании карты");
            setLoading(false);
            return;
        }

        try {
            const res = await addCardToUser(paymentMethod.id);
            setMessage(res.success ? "Карта успешно добавлена" : "Ошибка при сохранении");
        } catch (err: any) {
            setMessage(err?.message ?? "Не удалось сохранить карту");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#333",
                            "::placeholder": { color: "#aaa" },
                        },
                    },
                }}
            />

            <button
                type="submit"
                disabled={!stripe || loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Добавление..." : "Привязать карту"}
            </button>

            {message && <p className="text-sm text-red-500">{message}</p>}
        </form>
    );
}
