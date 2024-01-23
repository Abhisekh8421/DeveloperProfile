import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user_routes.js";
import path from "path";
import { dbConnect } from "./db/user_db.js";
dotenv.config({
  path: "./.env",
});

const app = express();
//middlewares
app.use(cookieParser());
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));

// console.log(path.join(path.resolve(), "public")); for checking
app.set("view engine", "ejs");

//router
app.use("/api/v1", userRouter);

dbConnect(); //database connection

app.get("/", (req, res) => {
  res.send("working perfectly");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is started");
});
