import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import PracticeTailwind from "./pages/PracticeTailwind";
import Settings from "./pages/Settings";
import Mainroute from "./routes/Mainroute";

const App = () => {
  return (
    <div className="w-full h-screen overflow-auto  bg-black">
      <Navbar />
      <Mainroute />
    </div>
  );
};

export default App;
