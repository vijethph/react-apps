import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    // this is map of all reducers i.e., methods that represent the different cases (actions) that need to be handled with the reducer
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // direct state manipulation is possible, thanks to redux toolkit and Immer
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
