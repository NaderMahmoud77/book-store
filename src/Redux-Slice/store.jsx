import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart-slice";
import { SnackReducer } from "./snack-slice";
import { SnackFormReducer } from "./snack-form";

export let Store = configureStore({
  reducer: {
    cart: cartReducer,
    snack: SnackReducer,
    snackForm: SnackFormReducer,
  },
});
