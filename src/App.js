import React from "react";
import "./App.css";

/* ------------------From redux & react-redux ---------------------- */
import { connect } from "react-redux";

/* ------------------ ---------------------- */
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ShopItems from "./components/shop_items/ShopItems";
import Cart from "./components/my_cart/Cart";
import CartButtons from "./components/modal/AddToCartModal";
import LoginForm from "./components/sign_up&login_forms/LoginForm";
import SignUpForm from "./components/sign_up&login_forms/SignUpForm";

import { totalQty } from "./components/utilities";
/* ------------------From react-router-dom ---------------------- */
import { Switch, Route } from "react-router-dom";

function App({ cartItems, cartModalInfo }) {

  return (
    <div className="App">
      <Header totalQty={totalQty} />
      <CartButtons cartModalInfo={cartModalInfo} />

      <main className="App-body">
        <Switch>
          <Route exact path="/">
            <ShopItems />
          </Route>

          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/signUp">
            <SignUpForm />
          </Route>
        </Switch>
      </main>

      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    cartModalInfo: state.IsItemInCart,
  };
};

export default connect(mapStateToProps)(App);

