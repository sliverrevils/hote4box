import Link from "next/link";
import styles from "./profileLayout.module.scss";
import { MENU } from "@/shared/constants/menus";
import { headers } from "next/headers";
import ProfileHeaderMenu from "@/components/menus/ProfileHeaderMenu/ProfileHeaderMenu";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.profileLayoutWrap}>
            <div className={styles.headerBlock}>
                <div className={styles.title}>Мой профиль</div>
                <ProfileHeaderMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
