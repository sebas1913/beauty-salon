import { ILoginRequest, ILoginResponse } from "../dto";

export interface PAuth{
    login(req: ILoginRequest): Promise<ILoginResponse>
}