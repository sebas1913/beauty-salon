import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ClientService } from "@/app/infrastructure/services/client.service";
import ClientsPageTemplate from "@/ui/template/clients/clientsTemplate";
interface IProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    };
}

export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? 1;

    return {
        title: `Clientes ${page}`,
        description: "Clientes de Beauty",
    };
};

async function ClientsPage({ searchParams }: IProps) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }

    const clientService = new ClientService();
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 10;
    const data = await clientService.find(page, size);
    

    return (
        <div>
            <ClientsPageTemplate dataResponse={data} />
        </div>
    );
}

export default ClientsPage;
