import React from "react";
import "./cart-btns-style.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function CartButtons({ dispatch }) {
  return (
    <div className="cart-btn_container">
      <span>
        <NavLink to="/signUp" className="proceed-to-checkout">
          Proceed To Checkout
        </NavLink>
      </span>

      <span>
        {" "}
        <NavLink to="/" className="continue-shopping">
          Continue Shopping
        </NavLink>
      </span>
    </div>
  );
}

export default connect()(CartButtons);
