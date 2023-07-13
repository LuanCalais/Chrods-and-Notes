import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router().get("/users", UserController.getAllUsers)

export default router
