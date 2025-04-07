import express from "express";
import { 
    createProgress, 
    getAllProgress, 
    getProgressById, 
    updateProgress, 
    deleteProgress 
} from "../Controllers/progressController.js";

const router = express.Router();

// Create a new progress record
router.post("/", createProgress);

// Get all progress records
router.get("/", getAllProgress);

// Get a progress record by ID
router.get("/:id", getProgressById);

// Update a progress record by ID
router.put("/:id", updateProgress);
// Add PATCH route for partial updates
router.patch("/:id", updateProgress);

// Delete a progress record by ID
router.delete("/:id", deleteProgress);

export default router;
