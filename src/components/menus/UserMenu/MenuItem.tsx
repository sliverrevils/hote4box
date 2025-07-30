"use client";
import type { IUserItemProps } from "@/shared/constants/menus";
import Image from "next/image";

import styles from "./userMenu.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MenuItem({
    menuItem,
    cb,
    smallHidden = false,
}: {
    menuItem: IUserItemProps;
    cb?: Function;
    smallHidden?: boolean;
}) {
    const active = usePathname() === menuItem.path;

    return (
        <Link
            href={!cb ? menuItem.path : ""}
            className={`${styles.menuItemWrap} ${smallHidden ? styles.smallHidden : ""} ${
                active ? styles.menuItem_active : ""
            }`}
            onClick={() => {
                cb && cb();
            }}
        >
            {active && <div className={styles.selectedBox}></div>}
            {active ? (
                <Image
                    src={menuItem.ico2}
                    alt={menuItem.name}
                    width={menuItem.size}
                    height={menuItem.size}
                    priority
                />
            ) : (
                <Image
                    src={menuItem.ico}
                    alt={menuItem.name}
                    width={menuItem.size}
                    height={menuItem.size}
                    priority
                />
            )}
            <div className={`${styles.link} ${active ? styles.link_active : ""}`}>
                {menuItem.name}
            </div>
        </Link>
    );
}
