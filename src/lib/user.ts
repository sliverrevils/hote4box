"use server";

import { logoutUser } from "@/actions/auth/auth";
import { User } from "@/mongo/models/User";
import { connectDB } from "@/mongo/mongoose";

export async function getUserInfo({ userId }: { userId: string }): Promise<IUserInfo | null> {
    try {
        await connectDB();
        const user = (await User.findById(userId).lean()) as unknown as IUser | null;
        if (user) {
            const { password, ...userInfo } = user;
            return JSON.parse(JSON.stringify(userInfo)) as IUserInfo;
        }
        throw new Error("Пользователь не найден");
    } catch (error) {
        return null;
    }
}
