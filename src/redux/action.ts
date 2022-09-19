import  { AppDispatch, RootState } from "./store";

import shoppingItems from "../data/items.json";

export const getData =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: "loading",
      payload: { ...getState().products,loading:true},
    });
    try {
      dispatch({
        type: "success",
        payload: { data: [...shoppingItems] ,loading:false,error:''},
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: { data: [] ,loading:false,error:'Error For Fetching Data'},
      });
    }
  };
