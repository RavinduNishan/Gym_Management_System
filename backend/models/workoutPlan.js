const mongoose = require("mongoose");

const workoutPlanSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Workout Plan Name
  fitnessGoal: { type: String, required: true }, // Fitness Goal
  level: { type: String, required: true }, // Beginner, Intermediate, Advanced
  duration: { type: Number, required: true }, // Duration in Days/Weeks
  frequency: { type: String, required: true }, // Daily, 3 Days/Week, etc.
  assignedTrainer: { type: String, required: true }, // Trainer Name
  exercises: [
    {
      exerciseName: { type: String, required: true }, // Exercise Name
      sets: { type: Number, required: true }, // Number of Sets
      restTime: { type: Number, required: true } // Rest Time in Seconds
    }
  ]
}, { timestamps: true });

const WorkoutPlan = mongoose.model("WorkoutPlan", workoutPlanSchema);
module.exports = WorkoutPlan;
