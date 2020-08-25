import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import shopReducer from "../redux/reducers/shopReducer";
import cartReducer from "../redux/reducers/cartReducer";
import { cartModalReducer } from "../redux/reducers/cartReducer";
import qtyInCartReducer from "../redux/reducers/cartReducer";

let allReducer = combineReducers({
  shopItems: shopReducer,
  cartItems: cartReducer,
  qtyIncart: qtyInCartReducer,
  IsItemInCart: cartModalReducer,
});

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
