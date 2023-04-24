import React from "react";
import "../Sidebaroption/SideBaroption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarOption;
