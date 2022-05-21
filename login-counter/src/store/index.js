import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// configureStore receives a configuration object where the reducer property can be set to have a single reducer, or multiple reducers as an object (map of reducers for keys, which will be merged into one big reducer)
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// as we have only one Redux store, this has to be provided only once
// actions can have many properties apart from type, ex: 'payload' to carry a dynamic value that needs to be changed in state

// objects returned by the reducer will not merge with the existing state; they will overwrite the existing state. So, if there are multiple properties in the Redux state, all of them must be returned in each action dispatch
// "DO NOT" mutate the existing state in reducers; always return new state object

// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };
//       break;
//     case "decrement":
//       return { counter: state.counter - 1 };
//       break;
//     default:
//       break;
//   }
//   return state;
// };

// const store = createStore(counterReducer);
