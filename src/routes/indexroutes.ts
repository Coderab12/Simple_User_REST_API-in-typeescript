import { Router } from "express";
import {
  homeHandeller,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/indexcontroller";

const router = Router();

// Home route handler
router.get("/", homeHandeller);

// Create user route
router.post("/", createUser);

// Update user route
router.patch("/", updateUser);

// Delete user route
router.delete("/", deleteUser);

export default router;
