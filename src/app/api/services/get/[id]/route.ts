import { NextResponse } from "next/server";
import { ServicesSalonService } from "@/app/infrastructure/services/services-salon.service";


export async function GET( request: Request, {params} : {params: Promise<{id: number}>}){
    const service = new ServicesSalonService();

    try {
        const id = (await params).id
        const response = await service.findById(id);

        return NextResponse.json(response, {status: 200});

    } catch (error) { 
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}