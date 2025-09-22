import mongoose from "mongoose";

const uri = process.env.MONGODB_URI! as string
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}
let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(uri);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}