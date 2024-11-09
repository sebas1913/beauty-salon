import { NextResponse } from "next/server";
import { ClientService } from "@/app/infrastructure/services/client.service";
import { ICreateClientRequest } from "@/app/core/application/dto/clients/clients-request.dto";

export async function POST(request: Request) {
    const client = new ClientService();

    try {
        const body: ICreateClientRequest = await request.json();
        const response = await client.create(body);

        return NextResponse.json(response, {status: 200});
        
    } catch (error: unknown) {
        return NextResponse.json({message: "Error"}, { status: 500})
    }
}
