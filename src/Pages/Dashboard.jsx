import React from "react";
import NavDashboard from "../Components/NavDashboard";
import ListaBread from "../Components/ListaBread";
import "../Styles/ListaBread.css"
import "../Styles/NavBar.css"


const Dashboard = () => {
  return (
    <div className="flex justify-center bg-[#c2a792cc]">
      <div className="w-screen h-screen">
        <NavDashboard />
        <ListaBread />
      </div>
    </div>
  );
};

export default Dashboard;
