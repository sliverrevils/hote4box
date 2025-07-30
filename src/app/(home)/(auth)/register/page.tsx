"use client";

import { registerUser } from "@/actions/auth/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../formAuth.module.scss";
import InputPassword from "@/components/common/inputs/Password/Password";
import Link from "next/link";
import PhoneInput from "@/components/common/inputs/Phone/Phone";

export default function RegisterPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            await registerUser(formData);
            router.push("/login");
        } catch (err: any) {
            setError(err.message || "Ошибка регистрации");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formAuth}>
            <div className={styles.infoBlock}>
                <h1 className={styles.infoText}>Создать аккаунт</h1>
                <div className={styles.infoHelp}>
                    <span>или </span>
                    <Link href={"/login"}>авторизоваться</Link>
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" required />
            <PhoneInput />
            {/* <input name="phone" placeholder="Телефон" required /> */}
            <InputPassword name="password" placeholder="Введите ваш пароль" required={true} />
            <InputPassword name="confirm" placeholder="Повторите пароль" required={true} />
            <select name="role" required>
                <option value="user">Пользователь</option>
                <option value="admin">Администратор</option>
            </select>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}
