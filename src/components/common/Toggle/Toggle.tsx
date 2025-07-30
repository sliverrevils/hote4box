"use client";
import { useState } from "react";
import styles from "./toggle.module.scss";

export default function Toggle({
    status,
    setStatus,
}: {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            className={`${styles.toggleWrap} ${status ? styles.toggleSelected : ""}`}
            onClick={() => setStatus((state) => !state)}
        >
            <div className={styles.toggler}></div>
        </div>
    );
}
