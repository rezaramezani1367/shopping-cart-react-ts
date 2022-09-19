import React, { Dispatch } from "react";
import { ShopCartProps } from "../redux/reducer";
import { formatPrice } from "../utilities/formatPrice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { DeleteToCart } from "../redux/action";
type ItemCartProps=ShopCartProps &{index:number}
const ItemCart = ({ id, name, imgUrl, price, quntity,index }: ItemCartProps) => {
    const dispatch: Dispatch<any>=useDispatch();
  return (
    <div className="grid grid-cols-3 mb-2 border">
      <img src={imgUrl} className="h-20 w-full object-cover" alt={name} />
      <div className=" flex flex-col justify-center px-4 ">
        <div>
          <span className="font-bold">{name}</span>
          <span className="text-xs pl-1">x{quntity}</span>
        </div>
        <div className="text-xs mt-1 ">{formatPrice(price)}</div>
      </div>
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-bold">{formatPrice(price*quntity)}</span>
        <AiFillCloseCircle className="cursor-pointer text-red-600 text-lg" onClick={()=>dispatch(DeleteToCart(index))} />
      </div>
    </div>
  );
};

export default ItemCart;
