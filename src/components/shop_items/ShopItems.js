import React, { useEffect } from "react";
import "./shop-items-style.css";
import { connect } from "react-redux";
import { shopActions } from "../redux/actions/shopActions";
import SkelentalLoader from "../skelental_loader/SkelentalLoader";
import {
  addShopItemToCart,
  addToCartModal,
} from "../redux/actions/cartActions";

const ShopItems = ({ products, dispatch, isFetching }) => {
  useEffect(() => {
    dispatch(shopActions());
  }, []);

  return (
    <div className="shop">
      <div className="shop-title">products</div>
      <div
        className={`loader ${
          isFetching && products.length === 0 && "showModal"
        }`}
      >
        <SkelentalLoader />
      </div>

      <div className="shop-items">
        {products.map((product, index) => (
          <div className="shop-item" key={index}>
            <div className="shop-item_img-c">
              <img src={product.shopItemImg} alt={product.title} />
            </div>
            <p className="shop-item_title">{product.title}</p>
            <div className="shop-item_price">₦{product.price}</div>
            <div
              className="add-to-cart-btn"
              onClick={() => {
                dispatch(addShopItemToCart(product));
                dispatch(addToCartModal(product.title));
              }}
            >
              add to cart
            </div>
            <div className="shop-item_dsct-tag">₦{product.dsctPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    products: state.shopItems.data,
    isFetching: state.shopItems.isFetching,
  };
};
export default connect(mapStateToProps)(ShopItems);
