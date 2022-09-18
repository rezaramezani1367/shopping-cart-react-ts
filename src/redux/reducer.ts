type state = {
  loading: boolean;
  data: any [];
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
