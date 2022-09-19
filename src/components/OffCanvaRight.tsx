import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { formatPrice } from "../utilities/formatPrice";
import ItemCart from "./ItemCart";
import StoreShop from "./StoreShop";

const OffCanvaRight = () => {
  const {
    carts: { dataCart },
  } = useSelector((last: RootState) => last);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let result = 0;
    dataCart.forEach((item) => {
      result += item.quntity * item.price;
    });
    setTotalPrice(result);
  }, [dataCart]);

  return (
    <div
      className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-slate-50 invisible bg-clip-padding outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96 shadow-lg"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5
          className="offcanvas-title mb-0 leading-normal font-semibold"
          id="offcanvasRightLabel"
        >
          Cart
        </h5>
        <button
          type="button"
          className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body flex-grow p-4 overflow-auto">
        {dataCart.length ? (
          dataCart.map((item, index) => (
            <ItemCart {...item} index={index} key={item.id} />
          ))
        ) : (
          <div className="text-red-500 font-bold flex justify-center items-center h-full text-2xl">
            Cart is Empty
          </div>
        )}
        {dataCart.length ? (
          <div className="flex justify-end">
            <div className="grid grid-cols-3 w-44">
              <span className="bg-slate-200 p-1.5 font-bold">Result</span>
              <span className="border p-1.5 col-span-2 font-bold text-red-600">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OffCanvaRight;
