import store, { AppDispatch, RootState } from "./store";

import shoppingItems from "../data/items.json";

export const getData =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({type:'success',
  payload:{...getState().products,data:[...shoppingItems]}})
  };
