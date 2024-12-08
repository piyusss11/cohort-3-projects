import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="h-screen w-full flex gap-4">
      <Sidebar />
      <Dashboard/>
    </div>
  );
};

export default App;
