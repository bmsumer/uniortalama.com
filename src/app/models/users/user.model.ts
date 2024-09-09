export class UserModel{
    id: string;
    email: string;
    fullname: string;
    name: string;
    surname: string;
    companyId: string;
    companyName: string;
    // userName: string;
    phone: string;
    token: string;
    refreshToken: string;
    password: string | null;
    auths: string[];
    regDate: Date;
    lastLogin: Date;
    status: boolean = true;
}
