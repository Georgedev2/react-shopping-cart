import React from "react";
import "./my-cart-style.css";
import { connect } from "react-redux";
import { totalQty } from "../utilities";
import CartButtons from "./CartButtons";

import {
  removeItemFromCart,
  increaseCartItemQty,
  decreaseCartItemQty,
} from "../redux/actions/cartActions";

function Cart({ cartItems, btnStatus, dispatch }) {
  return (
    <>
      <div className="shopping-cart">
        <div className="qty-in-cart">
          {cartItems.length === 0 ? (
            <span>Shopping Cart is Empty</span>
          ) : (
            <span>{`You have ${totalQty()} items in the Cart`}</span>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="shopping-cart_title">
            <div className="shopping-cart-title_one">
              <span>Item</span>
            </div>
            <div className="shopping-cart-title_two">
              <span>quntity</span>
            </div>
            <div className="shopping-cart-title_three">
              <span>Unit Price</span>
            </div>
            <div className="shopping-cart-title_four">
              <span>SubTotal</span>
            </div>
          </div>
        )}

        <main className="cart-list">
          {cartItems &&
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item_detail">
                  <img src={item.shopItemImg} alt={item.title} />
                  <div className="cart-item-detail_body">
                    <h4>{item.title}</h4>
                    <div
                      className="cart-item-remove-btn"
                      onClick={() => {
                        dispatch(removeItemFromCart(item));
                      }}
                    >
                      REMOVE from cart
                    </div>
                  </div>
                </div>

                <div className="cart-item-qty">
                  <span
                    className="cart-item-qty_incr-btn"
                    onClick={() => {
                      dispatch(increaseCartItemQty(item));
                    }}
                  >
                    +
                  </span>
                  <span className="cart-item-qty_qty">{item.qty}</span>
                  <span
                    className={`cart-item-qty_decr-btn ${
                      btnStatus ? "disable" : ""
                    } `}
                    onClick={() => {
                      dispatch(decreaseCartItemQty(item));
                    }}
                  >
                    -
                  </span>
                </div>

                <div className="cart-item_unit-prc">
                  <span>Unit price</span> <span>₦{item.price}</span>
                </div>

                <div className="cart-item_sub-total">
                  <span>total</span> <span>₦{item.price * item.qty}</span>
                </div>
              </div>
            ))}
        </main>
        {cartItems.length !== 0 && (
          <div className="shopping-cart-total">
            <div>
              <span className="shopping-cart-total_title">total</span>
              <span className="shopping-cart-total_price">
                ₦{" "}
                {cartItems.reduce((acc, item) => {
                  return acc + item.price * item.qty;
                }, 0)}
              </span>
            </div>
          </div>
        )}
        <CartButtons />
      </div>
    </>
  );
}

export default connect()(Cart);

/* let mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
}; */
