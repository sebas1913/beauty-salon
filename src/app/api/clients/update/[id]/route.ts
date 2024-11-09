import { NextResponse } from "next/server";
import { ClientService } from "@/app/infrastructure/services/client.service";
import { ICreateClientRequest } from "@/app/core/application/dto/clients/clients-request.dto";

export async function PUT(request: Request, { params }: { params: Promise<{ id: number }> }) {
    const client = new ClientService();

    try {
        const body: ICreateClientRequest = await request.json();
        const id = (await params).id;

        const response = await client.put(id, body);

        return NextResponse.json(response, { status: 200 });
    } catch (error: unknown) {
        console.log("Error updating client:", error);
        return NextResponse.json({ message: 'Error'}, { status: 500 });
    }
}
