import { NextResponse } from "next/server";
import { ClientService } from "@/app/infrastructure/services/client.service";

export async function DELETE(_: Request, {params} : {params: Promise<{id: number}>}) {
    const client = new ClientService();

    try {
        const id = (await params).id
        await client.destroy(id);

        return NextResponse.json({message: 'Eliminado'}, {status: 200});

    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
        
    }
}