import { NextResponse } from "next/server";
import { ServicesSalonService } from "@/app/infrastructure/services/services-salon.service";
import { ICreateServiceRequest } from "@/app/core/application/dto/services-salon/services-request.dto";

export async function PUT(request: Request, { params }: { params: Promise<{ id: number }> }) {
    const service = new ServicesSalonService();

    try {
        const body: ICreateServiceRequest = await request.json();
        const id = (await params).id;
        const response = await service.put(id, body);

        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}
