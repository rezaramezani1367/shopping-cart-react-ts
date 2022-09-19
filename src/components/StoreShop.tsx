import React, { Dispatch, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/action";
import { RootState } from "../redux/store";
import ShopItem from "./ShopItem";

const StoreShop = () => {
  const {
    products: { data, loading, error },
  } = useSelector((last: RootState) => last);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  switch (true) {
    case loading:
      return <div>Loading...</div>;
    case Boolean(error):
      return <div>{error}</div>;

    default:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((item, index) => {
            return <ShopItem {...item} key={index} />;
          })}
        </div>
      );
  }
};

export default StoreShop;
