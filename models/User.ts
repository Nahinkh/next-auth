import mongoose from "mongoose";
import { Schema } from "mongoose";

type UserType = {
    name: string;
    email: string;
    password: string | null;
    provider?: string;
}


const UserSchema = new Schema<UserType>({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        default: null,
    },
    provider:{
        type: String,
        enum: ['google', 'facebook', 'github',"credentials"],
    }
},{
    timestamps: true,
});

const User = mongoose.models.User || mongoose.model<UserType>('User', UserSchema);
export default User;