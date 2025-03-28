// src/Components/WorkoutPlans/WorkoutForm.jsx
import React, { useState } from "react";
import axios from "axios";
import "./WorkoutForm.css"; // Import CSS for styling

const WorkoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    fitnessGoal: "",
    level: "",
    duration: "",
    frequency: "",
    assignedTrainer: "",
    exercises: [{ exerciseName: "", sets: "", restTime: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...formData.exercises];
    updatedExercises[index][field] = value;
    setFormData({ ...formData, exercises: updatedExercises });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      setFormData({
        name: "",
        fitnessGoal: "",
        level: "",
        duration: "",
        frequency: "",
        assignedTrainer: "",
        exercises: [{ exerciseName: "", sets: "", restTime: "" }],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Workout Plan</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fitness Goal */}
        <div className="form-group">
          <label>Fitness Goal</label>
          <select
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            required
          >
            <option value="">Select Goal</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Endurance">Endurance</option>
          </select>
        </div>

        {/* Exercises */}
        <h3>Exercises:</h3>
        {formData.exercises.map((exercise, index) => (
          <div key={index}>
            <label>
              Exercise Name:
              <input
                type="text"
                value={exercise.exerciseName}
                onChange={(e) =>
                  handleExerciseChange(index, "exerciseName", e.target.value)
                }
                required
              />
            </label>
            <label>
              Sets:
              <input
                type="number"
                value={exercise.sets}
                onChange={(e) =>
                  handleExerciseChange(index, "sets", e.target.value)
                }
                required
              />
            </label>
            <label>
              Rest Time (seconds):
              <input
                type="number"
                value={exercise.restTime}
                onChange={(e) =>
                  handleExerciseChange(index, "restTime", e.target.value)
                }
                required
              />
            </label>
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;