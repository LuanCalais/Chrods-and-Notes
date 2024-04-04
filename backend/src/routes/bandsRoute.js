import { Router } from "express";
import BandController from "../controllers/BandController.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = Router()
  .get("/bands", BandController.getBands)
  .get("/bands/:id", BandController.getBandById)
  .get("/bands/user/:id", BandController.getBandByUserId)
  .post("/bands", upload.single("file"), BandController.createBand)
  .delete("/bands/:id", BandController.deleteBandById)
  .put("/bands/:id", upload.single("file"), BandController.editBandById);

export default router;
