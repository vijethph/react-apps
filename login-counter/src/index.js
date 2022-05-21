import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider should be typically wrapped at the highest level possible in the component tree which needs it

// redux is a state management system for cross-component or app-wide state
// there are 3 main kinds of state:
// 1. local state - state that belongs to a single component. example: useState for every keystroke of an input field. This should be managed component-internally with useState / useReducer
// 2. cross-component state - state that affects multiple components. example: open / closed state of a modal overlay. This requires "prop chains" / "prop drilling" where props (and functions) are passed across multiple components
// 3. app-wide state - state that affects the entire app (most or all components). example: user authentication status. This also requires "prop chains" / "prop drilling"
// both React Context and Redux solve the same problem of managing cross-component and app-wide states
