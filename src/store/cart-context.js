import React from "react";
//好比Vuex的index.js 乃初始狀態，需要在CartProvider那邊給定value
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
