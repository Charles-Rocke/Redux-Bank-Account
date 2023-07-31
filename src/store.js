// Learn redux in isolation
// automatically combines reducers, add thunk middleware, and sets up dev tools,
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import accountReducer from "./features/accounts/acountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
