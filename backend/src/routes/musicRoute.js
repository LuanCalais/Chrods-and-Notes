import { Router } from "express";
import MusicController from "../controllers/MusicController.js";

const router = Router()
.get("/musics", MusicController.getMusics)
.post("/musics", MusicController.creatMusic);

export default router;
