import { Router } from "express";
import GeminiController from "../controllers/geminiController.js";

const router = Router().get(
  "/gemini/generateResume",
  GeminiController.generateResume,
);

export default router;
