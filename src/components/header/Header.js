import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header({ totalQty }) {
  return (
    <header className="header">
      <div className="header_body">
        <NavLink to="/" className="header_title">
          <span>Our Products</span>
        </NavLink>

        <NavLink to="/cart" className="header-cart">
          <div className="header_cart-qty">
            <span>{totalQty()}</span>
          </div>

          <span className="header_cart-text">cart</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
