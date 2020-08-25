import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  INCREASE_CART_ITEM_QTY,
  DECREASE_CART_ITEM_QTY,
  ADD_TO_CART_MODAL,
} from "../types";

//Add shop items to cart
export const addShopItemToCart = (product) => {
  return (dispatch, getState) => {
    let cartItems = getState().cartItems.slice();

    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.qty++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, qty: 1 });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

//To remove items from cart
export const removeItemFromCart = (itemToRemove) => {
  return (dispatch, getState) => {
    let cartItems = getState().cartItems.slice();
    let filtedCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== itemToRemove.id;
    });

    dispatch({
      type: REMOVE_ITEM_CART,
      payload: filtedCartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(filtedCartItems));
  };
};

//increase quantity of a cart
export const increaseCartItemQty = (item) => {
  return (dispatch, getState) => {
    let cartItems = getState().cartItems.slice();
    /*  setBtnStatus(false); */
    cartItems.forEach((el) => {
      if (el.id === item.id) {
        item.qty++;
      }
    });

    dispatch({
      type: INCREASE_CART_ITEM_QTY,
      payload: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const decreaseCartItemQty = (item) => {
  return (dispatch, getState) => {
    let cartItems = getState().cartItems.slice();
    cartItems.forEach((el) => {
      if (el.id === item.id) {
        if (el.qty === 1) {
          /*  setBtnStatus(true); */ // disable button if that cart item qty is 1
          return;
        }
        item.qty--;
      }
    });

    dispatch({
      type: DECREASE_CART_ITEM_QTY,
      payload: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const addToCartModal = (title) => {
  return {
    type: ADD_TO_CART_MODAL,
    payload: title,
  };
};
