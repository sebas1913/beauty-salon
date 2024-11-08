import { NextResponse } from "next/server";
import { ServicesSalonService } from "@/app/infrastructure/services/services-salon.service";


export async function DELETE(_: Request, {params} : {params: Promise<{id: number}>}) {
    const service = new ServicesSalonService();

    try {
        const id = (await params).id
        await service.destroy(id);

        return NextResponse.json({message: 'Eliminado'}, {status: 200});

    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
        
    }
}