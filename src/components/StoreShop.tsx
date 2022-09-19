import React, { Dispatch, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/action";
import { RootState } from "../redux/store";

const StoreShop = () => {
  const {products:{data,loading,error}} = useSelector((last:RootState) => last);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(data);
  return <div>Store</div>;
};

export default StoreShop;
