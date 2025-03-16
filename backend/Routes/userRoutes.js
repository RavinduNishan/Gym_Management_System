import express from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);      // Create User
router.get("/users", getAllUsers);      // Get All Users
router.get("/users/:id", getUserById);  // Get Single User
router.put("/users/:id", updateUser);   // Update User
router.delete("/users/:id", deleteUser); // Delete User

export default router;
