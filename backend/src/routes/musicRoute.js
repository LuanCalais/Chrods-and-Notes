import { Router } from "express";
import MusicController from "../controllers/MusicController.js";

const router = Router()
  .get("/musics", MusicController.getMusics)
  .get("/musics/:id", MusicController.getMusicById)
  .get("/musics/composer/:composer", MusicController.getMusicByArtist)
  .post("/musics", MusicController.createMusic)
  .delete("/musics/:id", MusicController.deleteMusicById)
  .put("/musics/:id", MusicController.editMusicById);

export default router;
