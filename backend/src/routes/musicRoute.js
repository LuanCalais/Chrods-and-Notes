import { Router } from "express";
import MusicController from "../controllers/MusicController.js";

const router = Router()
  .get("/musics", MusicController.getMusics)
  .get("/musics/:id", MusicController.getMusicById)
  .post("/musics", MusicController.creatMusic)
  .delete("/musics/:id", MusicController.deleteMusicById)

export default router;
