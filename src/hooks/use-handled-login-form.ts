import {loginService} from "@/services";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {LoginFormData, loginSchema} from "@/schema/forms/login-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

export function useHandledLoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        reValidateMode: "onBlur", mode: "onSubmit"
    })
    const {handleSubmit,} = form

    const onSubmit = handleSubmit(async (data: LoginFormData) => {
        setIsLoading(true)
        try {
            const user = await loginService.login(data)
            setIsLoading(false)
            localStorage.setItem(
                'user',
                JSON.stringify(user)
            )
            router.push('/dashboard')
        } catch (e) {
            setIsLoading(false)
            toast.error("Server Error")
        }
    })


    return {isLoading, form, onSubmit}
}