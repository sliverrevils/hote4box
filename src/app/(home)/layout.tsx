import type { Metadata } from "next";
import styles from "./homeLayout.module.scss";
import HeaderHome from "@/components/html/home/Header/HeaderHome";
import FooterHome from "@/components/html/home/Footer/FooterHome";

// export const metadata: Metadata = {
//     title: {
//         template: "%s - Hotel4Box",
//         default: "Hotel4Box",
//     },
//     description: "Hotel4Box",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.homeLayoutWrap}>
            <HeaderHome />
            {children}
            <FooterHome />
        </div>
    );
}
