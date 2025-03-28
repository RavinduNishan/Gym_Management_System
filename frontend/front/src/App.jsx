// src/App.jsx
import React from "react";
import "./App.css"; // Import the CSS file
import Header from "./Components/Schedule/Header"; // Correct path
import Footer from "./Components/Schedule/Footer"; // Correct path

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to the Gym Management System</h1>
        <p>Manage your gym schedules efficiently with our system.</p>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;