import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductsStore from "./hooks-store/products-store";
import configureCounterStore from "./hooks-store/counter-store";

// use approach 1 like this:
// import ProdContextComponent from "./context/products-context";
// and wrap App component with ProdContextComponent

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
