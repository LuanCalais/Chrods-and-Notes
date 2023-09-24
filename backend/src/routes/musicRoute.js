import { Router } from "express";
import MusicController from "../controllers/MusicController.js";

const router = Router()
  .get("/musics", MusicController.getMusics)
  .get("/musics/:id", MusicController.getMusicById)
  .post("/musics", MusicController.creatMusic);

export default router;
