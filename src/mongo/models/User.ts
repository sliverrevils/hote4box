import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, required: true, unique: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        balance: { type: Number, required: true },
        stripeCustomerId: { type: String },
        savedCards: [{ type: String }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const User = models.User || model("User", userSchema);
