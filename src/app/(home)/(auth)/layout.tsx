import styles from "./authLayout.module.scss";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.authLayout}>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
