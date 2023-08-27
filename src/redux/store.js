import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./productSlice.js";
import authSlice from "./authSlice.js";

const persistConfig = {
  key: "root",
  storage,
};
const serializeFunction = (fn) => {
  return fn.toString();
};
const reducer = combineReducers({
  cart: cartSlice,
  products: productSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [serializeFunction],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
