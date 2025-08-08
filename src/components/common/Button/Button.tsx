import { forwardRef, type ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant = "default", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(styles.button, styles[variant], styles[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
