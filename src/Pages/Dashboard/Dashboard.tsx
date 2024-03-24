import React from "react";
import "./Dashboard.css";
import Navigation from "../../Components/Navigation/navigation.tsx";
import MyChart from "../chart.tsx";

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
            <div className="dashboard">
              <h2>Dashboard</h2>
              <MyChart ></MyChart >
            </div>
            <div className="dashboard1">
              <h2>Sold Evolution</h2>
              <div>
                <p className="DAY">TODAY</p>
                <p className="devise">0 MGA</p>
              </div>
            </div>
            <div className="dashboard2">
              <h2>Last transaction</h2>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
