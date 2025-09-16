import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
