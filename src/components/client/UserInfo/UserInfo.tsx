"use client";

import Link from "next/link";
import styles from "./userInfo.module.scss";
import Image from "next/image";
import CircleProgress from "../CircleProgress/CircleProgress";

export default function UserInfo({ userInfo }: { userInfo: IUserInfo }) {
    return (
        <div className={styles.userInfoWrap}>
            <Link href={"/"}>
                <Image
                    src={"/logo/h4b-black.svg"}
                    width={213.12}
                    height={48}
                    alt="Hotel4box logo"
                    className={styles.logo}
                />
            </Link>
            <div className={styles.circleWrap}>
                <CircleProgress value={50} strokeWidth={15} />
            </div>
            <div className={styles.statsBlock}>
                <div className={styles.user}>Привет, {userInfo.name}</div>
                <div className={styles.prop}>
                    Пользователь: <span>{userInfo.email}</span>
                </div>
                <div className={styles.prop}>
                    Баланс:<span> ${userInfo.balance.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
