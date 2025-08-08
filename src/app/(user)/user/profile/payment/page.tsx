import AddCardFormWrapper from "@/components/cards/AddCardForm";
import UserCardsClient from "@/components/cards/UserCardsClient";

export default function PaymentProfile() {
    return (
        <div>
            <AddCardFormWrapper />
            <br />
            <UserCardsClient />
        </div>
    );
}
