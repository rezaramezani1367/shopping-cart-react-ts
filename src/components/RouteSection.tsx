import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Store from "./Store";

const RouteSection = () => {
  return (
    <div className="container md:w-4/5 py-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RouteSection;
