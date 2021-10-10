import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Naming the import is up to you. For default imports, you can use any name:
// import xyz from './abc.js';
// But for import from a file having multiple exports, {} is needed:
// import { abc } './abc.js'; This is called named export, as exact name is needed
// Alias can be used as: import { smh as WHO } from './abc.js';
// * character can be used for importing all exports from a file like:
// import * as bundled from './abc.js'; access them as bundled.abc...
// To view all script files downloaded as part of webpage, go to DevTools -> Sources

// React is a JavaScript library for building user interfaces
// index.js is the first file to be executed when the page is loaded
// ReactDOM.render() takes 2 arguments as input: a default JS DOM API which calls on global document object, and a React Component to load on that element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
