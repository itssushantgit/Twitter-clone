import React from "react";
import Feed from "./feed/Feed";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Homepage;
