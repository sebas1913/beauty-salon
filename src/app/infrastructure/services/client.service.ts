import { HttpClient } from "../utils";
import { IGetClientResponse } from "@/app/core/application/dto/clients/clients-response.dto";
import { ICreateClientRequest } from "@/app/core/application/dto/clients/clients-request.dto";
import { Content } from "@/app/core/application/dto/clients/clients-response.dto";

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

    async findById(id: number): Promise<Content> {
        try {
            const response = await this.httpClient.get<Content>(`clients/${id}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async create(body: ICreateClientRequest) {
        try {
            const newCompany = this.httpClient.post<IGetClientResponse, ICreateClientRequest>('clients', body);
            return newCompany;
        } catch (error) {
            console.log(error);
        }
    }

    async put(id: number, body: ICreateClientRequest) {
		try {
            const response = this.httpClient.put<Content, ICreateClientRequest>(`clients/${id}`, body);
			return response;

		} catch (error) {
			console.log(error);
			throw error;
		}
	}
    

    async destroy(id: number){
        try {
            const response = await this.httpClient.delete(`clients/${id}`);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}