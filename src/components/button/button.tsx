"use client"

import React from "react"
import styles from "./button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline"
    size?: "sm" | "md" | "lg"
    loading?: boolean
    children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            loading = false,
            className = "",
            children,
            disabled,
            ...props
        },
        ref,
    ) => {
        const classes = [
            styles.btn,
            styles[`btn--${variant}`],
            styles[`btn--${size}`],
            loading ? styles["btn--loading"] : "",
            className,
        ]
            .filter(Boolean)
            .join(" ")

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <span className={styles.btnSpinner}></span>}
                <span
                    className={`${styles.btnContent} ${
                        loading ? styles["btnContent--loading"] : ""
                    }`}
                >
          {loading?"loading...":children}
        </span>
            </button>
        )
    },
)

Button.displayName = "Button"
