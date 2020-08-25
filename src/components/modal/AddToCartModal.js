import React from "react";
import "./add-to-cart-modal.css";
import { connect } from "react-redux";
import { addToCartModal } from "../redux/actions/cartActions";
import { NavLink } from "react-router-dom";

function AddToCartModal({ cartModalInfo, dispatch }) {
  const closeModalHandler = () => {
    dispatch(addToCartModal());
  };

  return (
    <>
      <div
        className={`modal-overlay ${
          cartModalInfo.modalStatus && "modal-active"
        }`}
      >
        <div className="modal">
          <div className="modal_title">
            <span className="add-to-cart">Added to Cart</span>
            <span className="modal-title_close-btn" onClick={closeModalHandler}>
              &times;
            </span>
          </div>
          <div className="modal_body">{cartModalInfo.title}</div>

          <div className="cart-btn_container">
            <span>
              <NavLink
                to="/signUp"
                className="proceed-to-checkout"
                onClick={closeModalHandler}
              >
                Proceed To Checkout
              </NavLink>
            </span>

            <span>
              <NavLink
                to="/"
                className="continue-shopping"
                onClick={closeModalHandler}
              >
                Continue Shopping
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect()(AddToCartModal);
