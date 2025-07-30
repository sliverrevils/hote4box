import UserMenu from "@/components/menus/UserMenu/UserMenu";
import styles from "./userLayoutWrap.module.scss";
import HeaderHome from "@/components/html/home/Header/HeaderHome";
import UserInfo from "@/components/client/UserInfo/UserInfo";
import { getCurrentUser } from "@/lib/auth";
import { getUserInfo } from "@/lib/user";
import { logoutUser } from "@/actions/auth/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getCurrentUser();
    const userInfo = await getUserInfo({ userId: user!.userId });
    if (!userInfo) {
        redirect("/login");
    }

    console.log("USER INFO ⭐", userInfo);

    return (
        <div className={styles.userLayoutWrap}>
            <div className={styles.headerSmall}>
                <HeaderHome />
            </div>

            <header className={styles.headerBig}>
                <UserInfo userInfo={userInfo} />
                <UserMenu />
            </header>
            <main>{children}</main>
            <footer className={styles.footerSmall}>
                <UserMenu />
            </footer>
        </div>
    );
}
