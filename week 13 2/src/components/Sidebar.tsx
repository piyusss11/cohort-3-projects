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
  };
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
    <div
      className={`bg-[#FEFEFE] lg:h-full flex justify-between items-center  duration-300 lg:relative lg:block p-4 absolute  bottom-0 w-full   ${
        showSidebar ? "lg:w-[300px] " : " lg:w-20 overflow-hidden"
      } `}
    >
      <div className="flex justify-between items-center">
        <h1 className={`hidden ${showSidebar ? "lg:block" : "hidden"}`}>
          Webinar.gg
        </h1>
        <img
          onClick={handleSidebarClose}
          className="hidden lg:block w-11 h-12 rounded cursor-pointer"
          src="https://avatars.githubusercontent.com/u/143982052?v=4"
          alt=""
        />
      </div>

      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`flex justify-between items-center my-6 p-2 rounded ${
            hovered === item.name
              ? "text-[#07344e] bg-[#E4E9EF] cursor-pointer font-semibold duration-300"
              : "text-gray-600"
          }`}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <h1 className={`hidden ${showSidebar ? "lg:block " : " hidden"}`}>
            {item.name}
          </h1>
          <img
            className="w-6 h-6 duration-1000"
            src={hovered === item.name ? item.hoverIcon : item.defaultIcon}
            alt={`${item.name} icon`}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
