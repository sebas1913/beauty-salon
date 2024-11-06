import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ServicesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Holaaaaaaaaaaaaaaaaaaa,{JSON.stringify(session)}</h1>
      {session.user?.name}
    </div>
  );
}
