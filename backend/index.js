import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";

// Import Routes
import userRoutes from "./Routes/userRoutes.js";

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
}));

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data

// Routes
app.use("/api/users", userRoutes); // User Routes
app.use("/api/schedules", scheduleRoute); // Schedule Routes
app.use("/api/workout", workoutRoutes); // Workout Plan Routes

// Default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the User, Schedule, and Workout Plan Management API!");
});

// Connect to MongoDB and Start Server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB Connection Failed:", err));