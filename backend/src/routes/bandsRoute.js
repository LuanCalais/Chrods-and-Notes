import { Router } from "express";
import BandController from "../controllers/BandController.js";

const router = Router()
  .get("/bands/:userId", BandController.getBands)
  .get("/bands/:id", BandController.getBandById)
  .get("/bands/user/:id", BandController.getBandByUserId)
  .post("/bands", BandController.createBand)
  .delete("/bands/:id", BandController.deleteBandById)
  .put("/bands/:id", BandController.editBandById)

export default router;
