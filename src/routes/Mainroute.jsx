import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PracticeTailwind from "../pages/PracticeTailwind";
import Settings from "../pages/Settings";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="practiceTailwind" element={<PracticeTailwind />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default Mainroute;
