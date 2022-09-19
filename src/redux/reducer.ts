export type ShopItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type state = {
  loading: boolean;
  data: ShopItemProps[];
  error: string;
};

type action = {
  type: "loading" | "success" | "error";
  payload: state;
};

export const products = (
  state: state = { loading: false, data: [], error: "" },
  { type, payload }: action
) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "error":
      return payload;

    default:
      return state;
  }
};

// cart reducer

export type ShopCartProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quntity: number;
};
export type stateCart = {
  loadingCart: boolean;
  dataCart: ShopCartProps[];
  errorCart: string;
};
type actionCart = {
  type: "loadingCart" | "successCart" | "errorCart";
  payload: stateCart;
};
export const carts = (
  state: stateCart = { loadingCart: false, dataCart: [], errorCart: "" },
  { type, payload }: actionCart
) => {
  switch (type) {
    case "loadingCart":
      return payload;
    case "successCart":
      return payload;
    case "errorCart":
      return payload;
    default:
      return state;
  }
};
