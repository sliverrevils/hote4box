import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function createJWT({ userId, role, name }: IUserSession) {
    return await new SignJWT({ userId, role, name })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7h")
        .sign(secret);
}

export async function verifyJWT({
    token,
}: {
    token: string;
}): Promise<(IUserSession & JWTPayload) | null> {
    try {
        const { payload } = await jwtVerify<IUserSession>(token, secret);
        return payload;
    } catch {
        return null;
    }
}
