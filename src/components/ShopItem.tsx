import React from "react";
import { useSelector } from "react-redux";
import { ShopItemProps } from "../redux/reducer";
import { RootState } from "../redux/store";
import { formatPrice } from "../utilities/formatPrice";

const ShopItem = ({ id, name, imgUrl, price }: ShopItemProps) => {
const {carts}=useSelector((last:RootState)=>last)
console.log(carts);
// console.log(id)
  return (
    <div className="border shadow rounded-lg overflow-hidden  ">
      <img src={imgUrl} alt={name} className="h-56 w-full object-cover" />
      <div className="flex justify-between items-baseline py-3 px-4">
        <span className="font-bold text-xl">{name}</span>
        <span className="text-slate-500">{formatPrice(price)}</span>
      </div>
      <div className="flex justify-center pb-3">
        <div className="grid grid-cols-4 w-40 justify-center bg-slate-100 h-8 shadow">
          <button className='bg-red-500 text-white hover:bg-red-800 font-bold text-lg'>-</button>
          <span className='col-span-2 text-center flex items-center justify-center border font-bold text-lg'>0</span>
          <button className='bg-blue-600 text-white hover:bg-blue-800 font-bold text-lg '>+</button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
