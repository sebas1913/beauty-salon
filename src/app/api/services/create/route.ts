import { NextResponse } from "next/server";
import { ServicesSalonService } from "@/app/infrastructure/services/services-salon.service";
import { ICreateServiceRequest } from "@/app/core/application/dto/services-salon/services-request.dto";

export async function POST(request: Request) {
    const service = new ServicesSalonService();

    try {
        const body: ICreateServiceRequest = await request.json();
        const response = await service.create(body);

        return NextResponse.json(response, {status: 200});
        
    } catch (error: unknown) {
        return NextResponse.json({message: "Error"}, { status: 500})
    }
}
