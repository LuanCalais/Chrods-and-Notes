import { Router } from "express";
import MusicController from "../controllers/MusicController.js";

const router = Router()
  .get("/musics", MusicController.getMusics)
  .get("/musics/:id", MusicController.getMusicById)
  .post("/musics", MusicController.creatMusic)
  .delete("/musics/:id", MusicController.deleteMusicById)
  .put("/musics/:id", MusicController.editMusicById);

export default router;
