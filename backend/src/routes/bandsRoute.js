import { Router } from "express";
import BandController from "../controllers/BandController.js";

const router = Router()
  .get("/bands", BandController.getBands)
  .get("/bands/:id", BandController.getBandById)
  .post("/bands", BandController.createBand)
  .delete("/bands/:id", BandController.deleteBandById)
  .put("/bands/:id", BandController.editBandById)

export default router;
