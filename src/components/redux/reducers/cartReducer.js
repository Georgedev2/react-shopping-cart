import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  INCREASE_CART_ITEM_QTY,
  DECREASE_CART_ITEM_QTY,
  ADD_TO_CART_MODAL,
} from "../types";

const intitialState = JSON.parse(localStorage.getItem("cartItems") || "[]");

const cartReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_ITEM_CART:
      return action.payload;
    case INCREASE_CART_ITEM_QTY:
      return action.payload;
    case DECREASE_CART_ITEM_QTY:
      return action.payload;
    default:
      return state;
  }
};
export default cartReducer;

////////////////////////////////////////////
const initState = {
  modalStatus: false,
  title: "",
};
export const cartModalReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART_MODAL:
      return {
        ...state,
        modalStatus: !state.modalStatus,
        title: action.payload,
      };

    default:
      return state;
  }
};

/* 
action.type === REMOVE_ITEM_CART means if the value of action.type is same as the value of REMOVE_ITEM_CART  */
