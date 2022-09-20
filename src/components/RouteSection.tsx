import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";

import StoreShop from "./StoreShop";

const RouteSection = () => {
  return (
    <div className="container md:w-4/5 py-6 px-3">
      <Routes>
        <Route path="/" element={<StoreShop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RouteSection;
