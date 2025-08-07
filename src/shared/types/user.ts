type IUserRole = "user" | "admin" | "super";

interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: IUserRole;
    balance: number;
    stripeCustomerId: string;
    savedCards: string[];
}

type IUserInfo = Omit<IUser, "password">;

interface IUserSession {
    userId: string;
    name: string;
    role: IUserRole;
}
