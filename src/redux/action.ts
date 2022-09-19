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
        localStorage.setItem("cart", JSON.stringify(help));
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
        localStorage.setItem("cart", JSON.stringify(dataCart));
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
export const MinusToCart =
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
        if (itm.id === id) {
          index = ind;
        }
      });
      if (dataCart[index].quntity > 1) {
        dataCart[index] = {
          ...dataCart[index],
          quntity: dataCart[index].quntity - 1,
        };
      } else {
        dataCart.splice(index, 1);
      }
      dispatch({
        type: "successCart",
        payload: {
          dataCart: [...dataCart],
          loadingCart: false,
          errorCart: "",
        },
      });
      dataCart.length
        ? localStorage.setItem("cart", JSON.stringify(dataCart))
        : localStorage.removeItem("cart");
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
export const DeleteToCart =
  (index: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: "loadingCart",
      payload: { ...getState().carts, loadingCart: true },
    });
    try {
      const {
        carts: { dataCart },
      } = getState();
      dataCart.splice(index, 1);

      dispatch({
        type: "successCart",
        payload: {
          dataCart: [...dataCart],
          loadingCart: false,
          errorCart: "",
        },
      });
      dataCart.length
        ? localStorage.setItem("cart", JSON.stringify(dataCart))
        : localStorage.removeItem("cart");
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
