import { Router } from "express";
import AnalyticsController from "../controllers/AnalyticsController.js";
const router = Router().get(
  "/analytics/musicByBand/:id",
  AnalyticsController.getMusicCountByBand,
);

export default router;
