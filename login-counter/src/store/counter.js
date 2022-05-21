import { createSlice } from "@reduxjs/toolkit";

// createSlice() accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates action creators and action types that correspond to the reducers and state.
// it creates a slice of the global state, and multiple slices can be created as well

// createReducer() is also present, which creates a reducer with certain enhancements, but createSlice() is more powerful than that. It is a utility that simplifies creating Redux reducer functions which supports directly mapping specific action types to case reducer functions that will update the state when that action is dispatched.

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // reducers is an object - a map of all the reducers this slice needs
  // it is an object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch)
  reducers: {
    increment(state) {
      state.counter++; // it's possible to mutate the existing state here
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// it is possible to use createStore(counterSlice.reducer), which provides access to reducers set up in the slice
// but this could be a problem with multiple reducers, as there can be only one store accepting only one reducer as input
// this can be solved by combineReducers() from redux or configureStore() from redux-toolkit

export const counterActions = counterSlice.actions; // this is an object full of keys having action identifiers, accessed by using method names
// Redux toolkit automatically creates action objects for the reducer function names created above. ex: actions.toggleCounter() returns an action object of this kind: { type: 'some-generated-identifier' }. Hence they are called as action creators

export default counterSlice.reducer;
