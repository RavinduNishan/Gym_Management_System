import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import userRoutes from "./Routes/userRoutes.js";
import scheduleRoute from "./Routes/scheduleRoute.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
}));

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({extended: false}));

app.use("/api", userRoutes); // User Routes
app.use("/api/schedules", scheduleRoute); // Schedule Route



app.get("/", (req, res) => {
    res.status(200).send("Welcome to the User Management API!");
});


// Connect to MongoDB and Start Server
mongoose.connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("MongoDB Connection Failed:", err));
