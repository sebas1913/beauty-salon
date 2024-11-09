import { HttpClient } from "../utils";
import { IGetClientResponse } from "@/app/core/application/dto/clients/clients-response.dto";


export class ClientService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(page: number = 0, size: number = 0): Promise<IGetClientResponse> {
        try {
            const response = await this.httpClient.get<IGetClientResponse>(`clients?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}