import styles from './spinner.module.scss'

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
    centered?: boolean
    overlay?: boolean
}

export const Spinner = ({
                            size = 'medium',
                            centered = false,
                            overlay = false
                        }: SpinnerProps) => {
    const spinnerClasses = [
        styles.spinner,
        size !== 'medium' ? styles[`spinner--${size}`] : '',
        centered ? styles['spinner--center'] : ''
    ].filter(Boolean).join(' ')

    const spinner = <div className={spinnerClasses} />

    if (overlay) {
        return (
            <div className={styles.overlay}>
                {spinner}
            </div>
        )
    }

    return spinner
}
