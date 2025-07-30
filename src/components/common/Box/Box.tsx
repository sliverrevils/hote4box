import styles from "./box.module.scss";

type BackgroundBox = "var(--f_gray-50)" | "var(--background)";

export default function Box({
    children,
    background = "var(--background)",
    borderRadius = "var(--radius_box-32x24x24x16)",
    className,
}: {
    children: React.ReactNode;
    background?: BackgroundBox;
    borderRadius?: "var(--radius_box_big-48x32x24x16)" | "var(--radius_box-32x24x24x16)";
    className?: string;
}) {
    return (
        <div className={`${styles.box} ${className}`} style={{ background, borderRadius }}>
            {children}
        </div>
    );
}
