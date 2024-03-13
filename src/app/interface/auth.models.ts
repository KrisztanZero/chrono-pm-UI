import { IUser } from "./user";

export interface ILogin{
    email: string;
    password: string;
}

export interface ILoginResponse{
    message: string;
    token: string;
    user: IUser;
}