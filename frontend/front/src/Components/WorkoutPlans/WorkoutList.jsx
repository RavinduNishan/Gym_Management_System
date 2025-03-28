// src/Components/WorkoutPlans/WorkoutList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WorkoutList.css"; // Import CSS for styling

const WorkoutList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all workout plans from the backend
  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/workout");
      setWorkoutPlans(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching workout plans:", err);
      setError("Failed to load workout plans.");
      setLoading(false);
    }
  };

  // Delete a workout plan by ID
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this workout plan?")) {
      try {
        await axios.delete(`http://localhost:3000/api/workout/${id}`);
        setWorkoutPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== id));
      } catch (err) {
        console.error("Error deleting workout plan:", err);
        alert("Failed to delete workout plan.");
      }
    }
  };

  // Fetch workout plans on component mount
  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  // Render loading or error states
  if (loading) return <p>Loading workout plans...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="workout-list-container">
      <h2>Workout Plans List</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fitness Goal</th>
            <th>Level</th>
            <th>Duration</th>
            <th>Frequency</th>
            <th>Assigned Trainer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlans.map((plan) => (
            <tr key={plan._id}>
              <td>{plan.name}</td>
              <td>{plan.fitnessGoal}</td>
              <td>{plan.level}</td>
              <td>{plan.duration} days</td>
              <td>{plan.frequency}</td>
              <td>{plan.assignedTrainer}</td>
              <td>
                <button className="btn-update">Update</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(plan._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutList;