import React from "react";
import "./HomePage.css"; // Correct path
import Header from "../Schedule/Header"; // Correct path
import Footer from "../Schedule/Footer"; // Correct path
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
      <div className="content-container">
        <div className="text-section">
          <center><h1>Welcome to the </h1>
          <h1>FitPro Gym Management System</h1></center>
          <p className="home-description">
  Elevate your fitness journey with our state-of-the-art Gym Management System. Designed for efficiency and ease, we empower you to seamlessly organize schedules, track progress, and achieve your goals. Experience the perfect blend of innovation and convenience, tailored to meet the needs of both trainers and members.
</p>
        </div>
        <div className="image-section">
          <img src="/assets/fitness.jpg" alt="Gym Scene" className="gym-image" />
        </div>
      </div>
    </div>


    <Footer />
    </div>
  );
};

export default HomePage;
