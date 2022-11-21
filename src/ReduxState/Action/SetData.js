import SET_CART_DATA from './ActionTypes'

const add_to_cart=()=>{
    return {
      type: SET_CART_DATA,
      info: 'add the create flashcart data to redux store'
    };
}