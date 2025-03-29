// src/Components/Schedule/FormPage.jsx
import React from "react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import CreateSchedule from "./CreateSchedule"; // Import the CreateSchedule component
import "./CreateSchedule.css";
import"../Pages/HomePage.css"
const FormPage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main style={{ minHeight: "80vh", padding: "20px" }}>
    
        <CreateSchedule />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FormPage;