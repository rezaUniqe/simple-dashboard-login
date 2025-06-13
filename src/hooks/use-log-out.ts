import {useRouter} from "next/navigation";

export function useLogOut() {
    const router = useRouter()
    return () => {
        localStorage.removeItem("user")
        router.push("/auth")
    }

}