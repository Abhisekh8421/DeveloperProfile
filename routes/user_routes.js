import express from "express";
import { Getcoins, StoreCoins } from "../controllers/user_controller.js";

const router = express.Router();

router.get("/storecoins", StoreCoins);
router.get("/getcoins", Getcoins);

export default router;
