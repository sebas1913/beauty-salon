"use client";
import { signOut } from "next-auth/react";
import Navbar from "@/ui/organisms/navbar/Navbar";
import AuthGuard from "./guard/authGuard";
import Button from "@/ui/atoms/button/Button";
import SubNavigation from "@/ui/molecules/subnavigation/subnavigation";
import Footer from "@/ui/organisms/footer/Footer";

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
            <SubNavigation></SubNavigation>
            <AuthGuard>{children}</AuthGuard>
            <Footer />
        </>
    )
}
