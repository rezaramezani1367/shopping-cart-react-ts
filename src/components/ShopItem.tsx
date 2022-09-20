import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AddToCart, MinusToCart } from "../redux/action";
import { ShopItemProps } from "../redux/reducer";
import { RootState } from "../redux/store";
import { formatPrice } from "../utilities/formatPrice";

const ShopItem = ({ id, name, imgUrl, price }: ShopItemProps) => {
  const {
    carts: { dataCart },
  } = useSelector((last: RootState) => last);
  const [quantity, setQuantity] = useState(0);
  const dispatch: Dispatch<any> = useDispatch();
  const initialQuantity = (id: number) => {
    let cerrentItem = dataCart.find((item) => item.id == id);
    if (cerrentItem == null) {
      setQuantity(0);
    } else {
      setQuantity(cerrentItem.quntity);
    }
  };
  useEffect(() => {
    initialQuantity(id);
  }, [dataCart]);

  return (
    <div className="border shadow rounded-lg overflow-hidden  ">
      <img src={imgUrl} alt={name} className="h-60 w-full object-cover" />
      <div className="flex justify-between items-baseline py-3 px-4">
        <span className="font-bold text-xl">{name}</span>
        <span className="text-slate-500">{formatPrice(price)}</span>
      </div>
      {quantity ? (
        <div className="flex justify-center pb-3">
          <div className="grid grid-cols-4 w-40 justify-center bg-slate-100 h-8 shadow">
            <button
              onClick={() => dispatch(MinusToCart(id))}
              className="bg-red-500 text-white hover:bg-red-800 font-bold text-lg flex justify-center items-center"
            >
              {quantity==1?<FaTrash />:"-"}
            </button>
            <span className="col-span-2 text-center flex items-center justify-center border font-bold text-lg">
              {quantity}
            </span>
            <button
              onClick={() => dispatch(AddToCart({ id, name, imgUrl, price }))}
              className="bg-blue-600 text-white hover:bg-blue-800 font-bold text-lg "
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pb-3">
          <button
            onClick={() => dispatch(AddToCart({ id, name, imgUrl, price }))}
            className="bg-blue-600 text-white hover:bg-blue-800 font-bold flex justify-center items-center gap-2 w-40 h-8 rounded-sm"
          >
            Add To Cart<FaShoppingCart/>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopItem;
