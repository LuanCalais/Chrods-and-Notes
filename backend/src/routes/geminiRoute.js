import { Router } from "express";
import GeminiController from "../controllers/geminiController.js";

const router = Router()
  .get("/gemini/generateBandResume", GeminiController.generateBandResume)
  .get("/gemini/generateMusicResume", GeminiController.generateMusicResume);

export default router;
