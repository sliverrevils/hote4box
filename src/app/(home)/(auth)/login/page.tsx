"use client";

import { loginUser } from "@/actions/auth/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../formAuth.module.scss";
import Link from "next/link";
import InputPassword from "@/components/common/inputs/Password/Password";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            await loginUser(formData);
            router.push("/user");
        } catch (err: any) {
            setError(err.message || "Ошибка входа");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formAuth}>
            <div className={styles.infoBlock}>
                <div className={styles.text}>Войти в личный кабинет </div>

                <div className={styles.infoHelp}>
                    <span>или </span>
                    <Link href={"/register"}>создать аккаунт</Link>
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input name="email" placeholder="E-mail" required />
            <div className={styles.passBlock}>
                <InputPassword name="password" placeholder="Введите ваш пароль" required={true} />
                <Link href={"/recovery"}>Забыли пароль?</Link>
            </div>
            {/* <input name="password" type="password" placeholder="Введите ваш пароль" required /> */}
            <button type="submit">Войти</button>
        </form>
    );
}
