import express from "express";
import { createWorkoutPlan, getAllWorkoutPlans, getWorkoutPlanById, updateWorkoutPlan, deleteWorkoutPlan } from "../controllers/workoutController.js";

const router = express.Router();

// Create a new workout plan
router.post("/workout", createWorkoutPlan);

// Get all workout plans
router.get("/workout", getAllWorkoutPlans);

// Get a workout plan by ID
router.get("/workout/:id", getWorkoutPlanById);

// Update a workout plan by ID
router.put("/workout/:id", updateWorkoutPlan);

// Delete a workout plan by ID
router.delete("/workout/:id", deleteWorkoutPlan);

export default router;