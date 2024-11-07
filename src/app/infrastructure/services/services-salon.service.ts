import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import { HttpClient } from "../utils";

export class ServicesSalonService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(page: number = 0, size: number = 0): Promise<IGetServiceResponse> {
        try {
            const response = await this.httpClient.get<IGetServiceResponse>(`services?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}