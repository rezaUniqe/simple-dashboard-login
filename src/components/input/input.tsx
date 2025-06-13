"use client"

import React from "react"
import styles from "./input.module.scss"

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
                    className={`${styles.input} ${styles[`input--${variant}`]} ${
                        error ? styles["input--error"] : ""
                    }`}
                    {...props}
                />
                {error && <span className={styles.inputError}>{error}</span>}
            </div>
        )
    }
)

Input.displayName = "Input"
