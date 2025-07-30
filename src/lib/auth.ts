import { cookies } from "next/headers";
import { verifyJWT } from "./jwt";

export async function getCurrentUser(): Promise<IUserSession | null> {
    const token = (await cookies()).get("token")?.value;
    if (!token) return null;

    const payload = await verifyJWT({ token });
    if (!payload) return null;
    console.log("TOKEN", payload);

    return {
        userId: payload.userId,
        role: payload.role,
        name: payload.name,
    };
}
