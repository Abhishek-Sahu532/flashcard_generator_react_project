import { SET_CART_DATA } from "./ActionTypes";
import { DELETE_CART_DATA } from "./ActionTypes";

export const add_to_cart = (data, data2) => {
  return (dispatch) => {
    dispatch({
      type: SET_CART_DATA,
      // info: "add the create flashcart data to redux store",
      // payload: data,
      data,
      data2
    });
  };
};

export const delete_to_cart = (data) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CART_DATA,
      info: "add the create flashcart data to redux store",
      payload: data,
    });
  };
};
