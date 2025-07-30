import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderHome from "@/components/html/home/Header/HeaderHome";

const inter = Inter({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "600"],
    display: "swap",
    variable: "--interFont",
});

export const metadata: Metadata = {
    title: {
        template: "%s - Hotel4Box",
        default: "Hotel4Box",
    },
    description: "Hotel4Box",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
