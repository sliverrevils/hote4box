type IUserRole = "user" | "admin" | "super";

interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: IUserRole;
    balance: number;
}

type IUserInfo = Omit<IUser, "password">;

interface IUserSession {
    userId: string;
    name: string;
    role: IUserRole;
}
