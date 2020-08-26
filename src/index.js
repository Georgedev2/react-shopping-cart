import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./components/redux/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

/* ./src/index.js
Module not found: Can't resolve 'react-redux' in 'C:\Users\Nwobodo george\Desktop\MY REACT\react-shopping-cart\src' */
