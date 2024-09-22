import { Router } from "express";
import OpenAiController from "../controllers/OpenAiController.js";

const router = Router().get("/openAi/generateResume", OpenAiController.GenerateResume);

export default router;
