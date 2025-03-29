// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import HomePage from "./Components/Pages/HomePage"; // Correct path
import SchedulesPage from "./Components/Pages/SchedulesPage"; // Correct path
import FormPage from "./Components/Schedule/FormPage";
import WorkoutListPage from "./Components/WorkoutPlans/WorkoutList"; // Import Workout List Page
import WorkoutFormPage from "./Components/WorkoutPlans/WorkoutForm"; // Import Workout Form Page

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Schedules Page */}
        <Route path="/schedules" element={<SchedulesPage />} />
        
        {/* Create Schedule Form */}
        <Route path="/form-page" element={<FormPage />} />
        
        {/* Workout List Page */}
        <Route path="/workouts" element={<WorkoutListPage />} />
        
        {/* Create/Edit Workout Form */}
        <Route path="/workouts/form" element={<WorkoutFormPage />} />
        
        {/* Edit Workout Form (with ID) */}
        <Route path="/workouts/form/:id" element={<WorkoutFormPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);