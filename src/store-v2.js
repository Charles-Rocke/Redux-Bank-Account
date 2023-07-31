// Learn redux in isolation
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// automatically combines reducers, add thunk middleware, and sets up dev tools,
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import accountReducer from "./features/accounts/acountSlice";
import customerReducer from "./features/customers/customerSlice";
// root reducer (combine all reducers that we have)
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create redux store, add middle ware thunk
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
