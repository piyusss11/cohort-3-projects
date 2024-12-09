
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
;

const App = () => {
  return (
    <div className="lg:h-screen lg:w-full lg:flex lg:gap-4 relative ">
      <Sidebar />
      <Dashboard/>
      {/* <Button/> */}
    </div>
  );
};

export default App;
