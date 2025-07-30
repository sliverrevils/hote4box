import LogOutBtn from "@/components/buttons/LogOut";
import { getCurrentUser } from "@/lib/auth";

export default async function User() {
    const user = await getCurrentUser();
    return (
        <div>
            <div>User - {user?.userId}</div>
            <LogOutBtn />
        </div>
    );
}
