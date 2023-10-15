import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()
  .get("/users", UserController.getAllUsers)
  .get("/users/:id", UserController.getUserById)
  .post("/users", UserController.createUser)
  .delete("/users/:id", UserController.deleteUserById);

export default router;
