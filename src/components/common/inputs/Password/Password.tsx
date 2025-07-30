"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./pass.module.scss";

export default function InputPassword({
    name,
    placeholder,
    required,
}: {
    name: string;
    placeholder: string;
    required: boolean;
}) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const isShowToggle = () => setIsShow((state) => !state);
    return (
        <div className={styles.passWrap}>
            <input
                name={name}
                placeholder={placeholder}
                required={required}
                type={isShow ? "text" : "password"}
                style={{ width: "100%" }}
            />
            <Image
                src={isShow ? "/common/eye-hid.svg" : "/common/eye.svg"}
                width={22.5}
                height={18}
                alt="aye"
                className={styles.eye}
                onClick={isShowToggle}
                priority
            />
        </div>
    );
}
