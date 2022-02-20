import React from "react";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
