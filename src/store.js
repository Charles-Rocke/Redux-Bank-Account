// Learn redux in isolation
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/acountSlice";
import customerReducer from "./features/customers/customerSlice";
// root reducer (combine all reducers that we have)
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create redux store, add middle ware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
