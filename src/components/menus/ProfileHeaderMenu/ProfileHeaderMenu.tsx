"use client";
import Link from "next/link";
import styles from "./ProfileHeaderMenu.module.scss";
import { MENU } from "@/shared/constants/menus";
import { usePathname } from "next/navigation";
export default function ProfileHeaderMenu() {
    const path = usePathname();
    return (
        <div className={styles.linksBlock}>
            <Link
                href={MENU.personal.path}
                className={path === MENU.personal.path ? styles.selected : ""}
            >
                {MENU.personal.name}
            </Link>
            <Link
                href={MENU.adress.path}
                className={path === MENU.adress.path ? styles.selected : ""}
            >
                {MENU.adress.name}
            </Link>
            <Link
                href={MENU.payment.path}
                className={path === MENU.payment.path ? styles.selected : ""}
            >
                {MENU.payment.name}
            </Link>
            <Link
                href={MENU.history.path}
                className={path === MENU.history.path ? styles.selected : ""}
            >
                {MENU.history.name}
            </Link>
        </div>
    );
}
