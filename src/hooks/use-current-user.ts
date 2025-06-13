import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {User, userSchema} from "@/schema/user";

export function useCurrentUser() {
    const router = useRouter()
    const [user, setUser] = useState<User| null>(null)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (userData) {
            try {
                setUser(userSchema.parse(userData))
            }catch (e) {
                setUser(null)
            }
        }
    }, [router])

   return user


}