"use client";

import { useEffect, useState, useTransition } from "react";

import { deleteCard, getSavedCards } from "@/actions/cards/cards";
import { Button } from "../common/Button/Button";

type Card = {
    id: string;
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
};

export default function UserCardsClient() {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            getSavedCards().then(setCards);
        });
    }, []);

    const handleDelete = (id: string) => {
        startTransition(async () => {
            await deleteCard(id);
            setCards((prev) => prev.filter((card) => card.id !== id));
        });
    };

    if (!cards.length) {
        return <p className="text-sm text-gray-500">Нет привязанных карт.</p>;
    }

    return (
        <div className="space-y-4">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="border p-4 rounded-lg flex items-center justify-between"
                >
                    <div>
                        <p className="text-md font-medium capitalize">{card.brand}</p>
                        <p className="text-sm text-gray-600">**** **** **** {card.last4}</p>
                        <p className="text-xs text-gray-500">
                            Срок: {card.expMonth}/{card.expYear}
                        </p>
                    </div>

                    <Button
                        variant="destructive"
                        disabled={loading}
                        onClick={() => handleDelete(card.id)}
                    >
                        Удалить
                    </Button>
                </div>
            ))}
        </div>
    );
}
