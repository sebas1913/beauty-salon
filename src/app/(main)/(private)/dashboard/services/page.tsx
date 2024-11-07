import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ServicesSalonService } from "@/app/infrastructure/services/services-salon.service";

interface IProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    }
}

export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? 1;

    return {
        title: `Servicios ${page}`,
        description: 'Servicios de Beauty'
    }

}

async function ServicesPage({ searchParams }: IProps) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }

    const servicesSalonService = new ServicesSalonService();
    const page = searchParams.page ? parseInt(searchParams.page) : 0;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;
    const data = await servicesSalonService.find(page, size);

    console.log(data);
    

    return (
        <div>
            
        </div>
    );
}

export default ServicesPage;


