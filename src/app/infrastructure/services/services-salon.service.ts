import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import { HttpClient } from "../utils";
import { ICreateServiceRequest } from "@/app/core/application/dto/services-salon/services-request.dto";

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

    async create(body: ICreateServiceRequest) {
        try {
            const newCompany = this.httpClient.post<IGetServiceResponse, ICreateServiceRequest>('services', body);
            return newCompany;
        } catch (error) {
            console.log(error);
        }
    }

    // async put(id: string, body: ICreateServiceRequest) {
	// 	try {
	// 		const coders = this.httpClient.put<ICompany, ICreateServiceRequest>(`services/${id}`, body);
	// 		return coders;

	// 	} catch (error) {
	// 		console.log(error);
	// 		throw error;
	// 	}
	// }
    

    async destroy(id: string){
        try {
            const company =  await this.httpClient.delete(`services/${id}`);
            return company;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}