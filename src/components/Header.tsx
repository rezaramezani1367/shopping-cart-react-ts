import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import OffCanvaRight from "./OffCanvaRight";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const {
    carts: { dataCart },
  } = useSelector((last: RootState) => last);

  const [countNotification, setCountNotification] = useState(0);
  useEffect(() => {
    let result = 0;
    dataCart.forEach((item) => {
      result += item.quntity;
    });
    setCountNotification(result);
  }, [dataCart]);

  return (
    <div className="shadow-lg py-3">
      <OffCanvaRight />
      <div className="container md:w-4/5 flex justify-between items-center ">
        <div className="flex gap-6 items-center ">
          <NavLink className="nav" to="/" end>
            Store
          </NavLink>

          <NavLink className="nav" to="/about">
            About
          </NavLink>
        </div>
        <div
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="w-12 h-12 mx-3 hover:bg-blue-700 flex items-center justify-center transition-all 
        duration-200 rounded-full border border-slate-500 hover:text-white 
        hover:cursor-pointer relative"
        >
          <FaShoppingCart className="h-6 w-6" />
          <div
            className="w-8 h-8 flex justify-center items-center bg-red-600 text-white 
           absolute top-6 -right-3 rounded-full opacity-90"
          >
            {countNotification}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
