"use client";
import { signOut } from "next-auth/react";
import Navbar from "@/ui/organisms/navbar/Navbar";
import AuthGuard from "./guard/authGuard";
import Button from "@/ui/atoms/button/Button";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/'
        });
    };

    return (
        <>
            <Navbar>
                <Button onClick={handleSignOut}>Cerrar sesión</Button>
            </Navbar>
            <AuthGuard>{children}</AuthGuard>
        </>
    )
}
