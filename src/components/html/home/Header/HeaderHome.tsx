import { getCurrentUser } from "@/lib/auth";

import styles from "./headerHome.module.scss";
import Image from "next/image";
import Link from "next/link";

export default async function HeaderHome() {
    const user = await getCurrentUser();
    console.log("GETTED USER🎯", user);
    return (
        <header className={styles.headerHome}>
            <Link href={"/"}>
                <Image
                    src={"/logo/h4b-black.svg"}
                    width={213.12}
                    height={48}
                    alt="Hotel4box logo"
                    className={styles.logo}
                />
            </Link>

            {!user ? (
                <div className={styles.notAuth}>
                    <div className={styles.linksBlock}>
                        <Link href={"/user/tracking"}>Отследить посылку</Link>
                        <Link href={"/login"}>Войти</Link>
                    </div>
                    <Link href={"/register"} className={styles.regBtn}>
                        Регистрация
                    </Link>
                </div>
            ) : (
                <div className={styles.auth}>
                    <Link href={"/user/tracking"} className={styles.trackBtn}>
                        Отследить посылку
                    </Link>
                    <Link href={"/user"}>
                        <Image
                            src={"/common/user_blank.svg"}
                            width={26}
                            height={26}
                            alt="user"
                            priority
                        />
                    </Link>
                </div>
            )}
        </header>
    );
}
