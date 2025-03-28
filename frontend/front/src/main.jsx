// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";  // Import Toastify CSS
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

import App from "./App";
import HomePage from "./Components/Pages/HomePage";
import SchedulesPage from "./Components/Pages/SchedulesPage";
import FormPage from "./Components/Schedule/FormPage";
import SignupForm from "./Components/Pages/Users/SignupForm"; // Import the SignupForm component
import LoginForm from "./Components/Pages/Users/LoginForm"; // Import the LoginForm component
import UsersDashboard from "./Components/Pages/Users/UsersDashboard"; // Import the UsersDashboard component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ToastContainer for displaying toast messages */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Schedules Page */}
        <Route path="/schedules" element={<SchedulesPage />} />
        {/* Create Schedule Form */}
        <Route path="/form-page" element={<FormPage />} />
        {/* Signup Page */}
        <Route path="/signup" element={<SignupForm />} />
        {/* Login Page */}
        <Route path="/login" element={<LoginForm />} />
        {/* Users Dashboard */}
        <Route path="/users" element={<UsersDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
