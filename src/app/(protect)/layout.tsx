"use client"
import {ReactNode, use} from "react";
import {useCurrentUser} from "@/hooks/use-current-user";
import {redirect} from "next/navigation";
import {Spinner} from "@/components/spinner/spinner";

function Layout({children}: { children: ReactNode }) {
    const {user, isLoadingUser} = useCurrentUser()
    if (isLoadingUser) {
        return <Spinner size="small"/>
    }

    if (!user) {
        redirect("/auth")
    }


    return <>{children}</>
}

export default Layout