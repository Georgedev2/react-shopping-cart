import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header({ totalQty }) {
  return (
    <header className="header">
      <div className="header_body">
        <NavLink to="/" className="header_title">
          <span>Our Products</span>
        </NavLink>

        <NavLink to="/cart" className="header-cart">
          <AiOutlineShoppingCart
           color="black" size="3rem" className="header-cart_shopping-basket"/>
          <div className="header_cart-qty">
            <span>{totalQty()}</span>
          </div>

          <span className="header_cart-text">Cart</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

