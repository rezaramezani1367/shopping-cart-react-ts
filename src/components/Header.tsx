import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="shadow-lg py-3">
      <div className="container md:w-4/5 flex justify-between items-center ">
        <div className="flex gap-6 items-center ">
          <NavLink className="nav" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav" to="/store">
            Store
          </NavLink>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
        </div>
        <div
          className="w-12 h-12 mx-3 hover:bg-blue-700 flex items-center justify-center transition-all 
        duration-200 rounded-full border border-slate-500 hover:text-white 
        hover:cursor-pointer relative"
        >
          <FaShoppingCart className="h-6 w-6" />
          <div
            className="w-8 h-8 flex justify-center items-center bg-red-600 text-white 
           absolute top-6 -right-3 rounded-full opacity-90"
          >
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
