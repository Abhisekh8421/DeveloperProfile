import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "QuadB_Task",
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e.message));
};
