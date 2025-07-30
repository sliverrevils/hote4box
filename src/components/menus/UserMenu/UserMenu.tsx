"use client";
import { MENU } from "@/shared/constants/menus";
import MenuItem from "./MenuItem";
import styles from "./userMenu.module.scss";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/actions/auth/auth";

export default function UserMenu() {
    const router = useRouter();

    async function handleLogout() {
        await logoutUser();
        router.push("/");
    }
    return (
        <aside className={styles.userMenuWrap}>
            <MenuItem menuItem={MENU.orders} />
            <MenuItem menuItem={MENU.accounts} />
            <MenuItem menuItem={MENU.branches} />
            <MenuItem menuItem={MENU.tracking} />
            <MenuItem menuItem={MENU.profile} smallHidden />
            <MenuItem menuItem={MENU.exit} cb={handleLogout} smallHidden />
        </aside>
    );
}
