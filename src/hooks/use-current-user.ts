import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {User, userSchema} from "@/schema/user";

export function useCurrentUser() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const userData = localStorage.getItem("user")
        setLoading(false)
        if (userData) {
            try {
                const user = userSchema.parse(JSON.parse(userData))
                setUser(user)
            } catch (e) {
                setLoading(false)

                setUser(null)
            }
        }
    }, [router])

    return {user, isLoadingUser: loading}


}