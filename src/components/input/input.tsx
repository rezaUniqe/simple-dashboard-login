"use client"

import React from "react"
import styles from "./input.module.scss"
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    variant?: "default" | "outlined"
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, variant = "default", className = "", ...props }, ref) => {
        return (
            <div className={`${styles.inputWrapper} ${className}`}>
                {label && (
                    <label htmlFor={props.id} className={styles.inputLabel}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={clsx(styles.input, styles[`input--${variant}`])}
                    {...props}
                />
                {error && <span className={styles["input-error"]}>{error}</span>}
            </div>
        )
    }
)

Input.displayName = "Input"
