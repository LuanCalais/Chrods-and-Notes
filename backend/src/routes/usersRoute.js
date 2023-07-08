import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/users", UserController.getAllUsers);

export default router
