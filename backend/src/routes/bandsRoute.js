import { Router } from "express";
import BandController from "../controllers/BandController.js";

const router = Router()
  .get("/bands", BandController.getBands)
  .get("/bands/:id", BandController.getBandById)
  .post("/bands", BandController.createBand);

export default router;
