// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import HomePage from "./Components/Pages/HomePage"; // Correct path
import SchedulesPage from "./Components/Pages/SchedulesPage"; // Correct path
import FormPage from "./Components/Schedule/FormPage"; 
import AddProgress from "./Components/Pages/AddProgress"; // Import AddProgress component
import ManageProgress from "./Components/Pages/ManageProgress"; // Import ManageProgress component
import EditProgress from "./Components/Pages/EditProgress"; // Import EditProgress component

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
        {/* Progress Management */}
        <Route path="/add-progress" element={<AddProgress />} />
        <Route path="/manage-progress" element={<ManageProgress />} />
        <Route path="/edit-progress/:id" element={<EditProgress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);