import { Router } from "express";
import BandController from "../controllers/BandController.js";

const router = Router()
    .post("/bands", BandController.createBand);

export default router;
