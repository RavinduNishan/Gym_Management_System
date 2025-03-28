// src/Pages/SchedulesPage.jsx
// src/Components/Pages/SchedulesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import ScheduleTable from "../Schedule/ScheduleTable"; // Correct path
import Header from "../Schedule/Header"; // Correct path
import Footer from "../Schedule/Footer"; // Correct path
import "./SchedulesPage.css"; // Correct path



const SchedulesPage = () => {
  return (
    <div className="schedules-page">
        <Header />
        <div>
          <ScheduleTable />
      <Link to="/form-page">
        <button className="btn-create">Create Schedule</button>
      </Link>
      
    </div>
    <Footer />
    </div>
  );
};

export default SchedulesPage;