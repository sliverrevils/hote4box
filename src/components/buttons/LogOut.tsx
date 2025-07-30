"use client";

import { logoutUser } from "@/actions/auth/auth";
import { useRouter } from "next/navigation";

export default function LogOutBtn() {
    const router = useRouter();

    async function handleLogout() {
        await logoutUser();
        router.push("/");
    }
    return <button onClick={handleLogout}> LogOut</button>;
}
