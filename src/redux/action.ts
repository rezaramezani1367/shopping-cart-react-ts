import { AppDispatch, RootState } from "./store";

import shoppingItems from "../data/items.json";
import { ShopCartProps, ShopItemProps } from "./reducer";

export const getData =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: "loading",
      payload: { ...getState().products, loading: true },
    });
    try {
      dispatch({
        type: "success",
        payload: { data: [...shoppingItems], loading: false, error: "" },
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: { data: [], loading: false, error: "Error For Fetching Data" },
      });
    }
  };

export const AddToCart =
  (item: ShopItemProps) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: "loadingCart",
      payload: { ...getState().carts, loadingCart: true },
    });
    try {
      const {
        carts: { dataCart },
      } = getState();
      const currentDataCart = dataCart.filter((itm) => itm.id == item.id);

      if (currentDataCart.length) {
        let index = -1;
        dataCart.forEach((itm, ind) => {
          if (itm.id == item.id) {
            index = ind;
          }
        });
        let help = [...dataCart];
        help[index] = { ...help[index], quntity: help[index].quntity + 1 };
        dispatch({
          type: "successCart",
          payload: {
            dataCart: [...help],
            loadingCart: false,
            errorCart: "",
          },
        });
      } else {
        dataCart.push({ ...item, quntity: 1 });
        dispatch({
          type: "successCart",
          payload: {
            dataCart: [...dataCart],
            loadingCart: false,
            errorCart: "",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "errorCart",
        payload: {
          dataCart: [],
          loadingCart: false,
          errorCart: "Error For Fetching Data",
        },
      });
    }
  };
export const RemoveToCart =
  (id: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: "loadingCart",
      payload: { ...getState().carts, loadingCart: true },
    });
    try {
      const {
        carts: { dataCart },
      } = getState();
      let index = -1;
      dataCart.forEach((itm, ind) => {
        if (itm.id == id) {
          index = ind;
        }
      });
      if (index != -1) {
        let help = [...dataCart];
        if (help[index].quntity > 0) {
          help[index] = { ...help[index], quntity: help[index].quntity - 1 };
        }
        dispatch({
          type: "successCart",
          payload: {
            dataCart: [...help],
            loadingCart: false,
            errorCart: "",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "errorCart",
        payload: {
          dataCart: [],
          loadingCart: false,
          errorCart: "Error For Fetching Data",
        },
      });
    }
  };
