'use client'

import styles from './login.module.scss'
import {Input} from '@/components/input/input'
import {Button} from '@/components/button/button'
import {useHandledLoginForm} from "@/hooks/use-handled-login-form";

export default function LoginPage() {
    const {isLoading, onSubmit, form} = useHandledLoginForm()
    const {
        register,
        formState: {errors},
    } = form

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-card']}>
                <div className={styles['login-header']}>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
                </div>

                <form onSubmit={onSubmit} className={styles['login-form']}>
                    <Input
                        id="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="09xxxxxxxxx"
                        {...register('phone')}
                        error={errors.phone?.message}
                        required
                    />

                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        {...register('password')}
                        error={errors.password?.message}
                        required
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isLoading}
                        className="btn--full" // optional: make this a SCSS class if needed
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    )
}
