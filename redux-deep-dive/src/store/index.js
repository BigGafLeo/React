import { configureStore } from "@reduxjs/toolkit";import ui from "./ui-slice";
import cart from "./cart-slice";

const store = configureStore({
  reducer: { ui: ui, cart: cart },
});

export default store;
