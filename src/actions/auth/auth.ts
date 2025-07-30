"use server";

import { createJWT } from "@/lib/jwt";
import { User } from "@/mongo/models/User";
import { connectDB } from "@/mongo/mongoose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { isValidPhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js";

export async function registerUser(formData: FormData) {
    await connectDB();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;
    const phone = formData.get("phone") as string;
    const confirm = formData.get("confirm") as string;

    if (!isValidPhoneNumber(phone)) {
        console.log(phone);
        throw new Error("Введите корректный номер");
    }
    const phoneNum = parsePhoneNumberWithError(phone);
    phoneNum.number;

    const existingPhone = await User.findOne({ phone: phoneNum.number });
    if (existingPhone) throw new Error("Телефон уже зарегистрирован");

    if (password !== confirm) {
        throw new Error("Пароли не совпадают ! ");
    }

    const existing = await User.findOne({ email });
    if (existing) throw new Error("Email уже зарегистрирован");

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        phone: phoneNum.number,
        balance: 0.0,
    });
}

export async function loginUser(formData: FormData) {
    await connectDB();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Пользователь не найден");
    console.log("USER🛂", user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Неверный пароль");

    const token = await createJWT({
        userId: user._id.toString(),
        role: user.role,
        name: user.name,
    });

    (await cookies()).set("token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 7,
    });
}

export async function logoutUser() {
    (await cookies()).set("token", "", { maxAge: 0 });
}
