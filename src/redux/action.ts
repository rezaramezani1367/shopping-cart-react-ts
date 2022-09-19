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
        const help = dataCart.map((itm) => {
          if (itm.id == item.id) {
            return { ...itm, quntity: itm.quntity + 1 };
          } else {
            return itm;
          }
        });
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
      const help = dataCart.map((itm) => {
        if (itm.id == id) {
          return { ...itm, quntity: itm.quntity - 1 };
        } else {
          return itm;
        }
      });

      dispatch({
        type: "successCart",
        payload: {
          dataCart: [...help],
          loadingCart: false,
          errorCart: "",
        },
      });
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
