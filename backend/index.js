import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

// Import Routes
import userRoutes from "./Routes/userRoutes.js";
import { Progress } from "./Models/progressmodel.js";




const app = express();

app.use(express.json()); // Middleware to parse JSON

app.use("/api", userRoutes); // User Routes

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the User Management API!");
});

// Connect to MongoDB and Start Server
mongoose.connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("MongoDB Connection Failed:", err));
