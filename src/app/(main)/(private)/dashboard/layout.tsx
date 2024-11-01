import AuthGuard from "./guard/authGuard";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
    <AuthGuard>{children}</AuthGuard>
    )
}
