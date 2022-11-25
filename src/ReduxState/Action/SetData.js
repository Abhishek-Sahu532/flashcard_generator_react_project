import { SET_CART_DATA } from "./ActionTypes";


export const add_to_cart =(data)=>{
  return(dispatch)=>{
    dispatch({
      type: SET_CART_DATA,
      info: "add the create flashcart data to redux store",
      payload: data
    });
  }
}
