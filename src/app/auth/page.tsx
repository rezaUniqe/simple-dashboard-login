'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import styles from './login.module.scss'
import { Input } from '@/components/input/input'
import { Button } from '@/components/button/button'
import { LoginFormData, loginSchema } from '@/schema/forms/login-form'

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormData) => {
        setIsLoading(true)

        setTimeout(() => {
            localStorage.setItem(
                'user',
                JSON.stringify({
                    phone: data.phone,
                    name: data.phone.replace(/\D/g, '').slice(-4),
                })
            )
            router.push('/dashboard')
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-card']}>
                <div className={styles['login-header']}>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
                    <Input
                        id="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="+1 (555) 123-4567"
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
