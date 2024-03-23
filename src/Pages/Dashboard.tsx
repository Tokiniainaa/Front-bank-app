import React from "react";
import "./Dashboard.css";
import Navigation from "../Components/navigation.tsx";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="Top">
          <button className="btnn species">Species</button>
          <button className="AddAccount">+ Add an Account</button>
        </div>
        <div className="Bottom">
          <div>
             <select className="select">
             <option value="">This month</option>
             </select>
             </div>
          <div className="bigDash">
            <div className="dashboard"></div>
            <div className="dashboard1"></div>
            <div className="dashboard2"></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
