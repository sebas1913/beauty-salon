import { NextResponse } from "next/server";
import { ClientService } from "@/app/infrastructure/services/client.service";

export async function GET( request: Request, {params} : {params: Promise<{id: number}>}){
    const client = new ClientService();

    try {
        const id = (await params).id
        const response = await client.findById(id);

        return NextResponse.json(response, {status: 200});

    } catch (error) { 
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}