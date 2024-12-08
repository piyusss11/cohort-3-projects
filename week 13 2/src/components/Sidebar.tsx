import React, { useState } from "react";
import {
  Home,
  Webinar,
  Billings,
  UserManagement,
  Settings,
  fillHome,
  fillWebinar,
  fillBilling,
  fillUserManagement,
  fillSettings,
} from "../assets/exportingSvg";

const Sidebar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleSidebarClose = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }
  const menuItems = [
    { name: "Home", defaultIcon: Home, hoverIcon: fillHome },
    { name: "Webinars", defaultIcon: Webinar, hoverIcon: fillWebinar },
    { name: "Billings", defaultIcon: Billings, hoverIcon: fillBilling },
    {
      name: "User Management",
      defaultIcon: UserManagement,
      hoverIcon: fillUserManagement,
    },
    { name: "Settings", defaultIcon: Settings, hoverIcon: fillSettings },
  ];

  return (
    <div className={`bg-[#FEFEFE] p-4 ${showSidebar ?"w-[300px]" : "w-20 overflow-hidden"} `}>
      <div className="flex justify-between items-center">
        <h1 className={`${showSidebar ? "block" : "hidden"}`}>Webinar.gg</h1>
        <img onClick={handleSidebarClose}
          className="w-12 h-12 rounded cursor-pointer"
          src="https://avatars.githubusercontent.com/u/143982052?v=4"
          alt=""
        />
      </div>

      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`flex justify-between items-center my-6 p-2 rounded transition-all ${
            hovered === item.name
              ? "text-[#07344e] bg-[#E4E9EF] cursor-pointer font-semibold duration-300"
              : "text-gray-600"
          }`}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <h1 className={`${showSidebar ? "block" : "hidden"}`}>{item.name}</h1>
          <img
            className="w-6 h-6"
            src={hovered === item.name ? item.hoverIcon : item.defaultIcon}
            alt={`${item.name} icon`}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
