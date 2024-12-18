import dotenv from "dotenv";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
  export const DATABASE_URL: string = process.env.DATABASE_URL || 'mongodb+srv://mahdisaiful215:<db_password>@cluster0.92c11.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
