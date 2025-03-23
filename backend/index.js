import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import userRoutes from "./Routes/userRoutes.js";
import workoutRoutes from "./Routes/workoutRoutes.js";

const app = express(); // Initialize Express app

// Middleware to parse JSON
app.use(express.json());

// User Routes
app.use("/api/users", userRoutes);

// Workout Plan Routes
app.use("/api", workoutRoutes);

// Default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the User and Workout Plan Management API!");
});

// Connect to MongoDB and Start Server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB Connection Failed:", err));