import { getCurrentUser } from "@/lib/auth";

import styles from "./footerHome.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function FooterHome() {
    return (
        <header className={styles.footerHome}>
            <Image
                src={"/logo/h4b-black.svg"}
                width={213.12}
                height={48}
                alt="Hotel4box logo"
                className={styles.logo}
            />

            <div className={styles.linksBlock}>
                <Link href={"/login"}>Помощь</Link>
                <Link href={"/login"}>Заявление о конфиденциальности</Link>
                <Link href={"/login"}>Отследить посылку</Link>
                <Link href={"/login"}>В начало страницы ↑</Link>
            </div>
        </header>
    );
}
