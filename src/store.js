// Learn redux in isolation
import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/acountSlice";
import customerReducer from "./features/customers/customerSlice";
// root reducer (combine all reducers that we have)
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create redux store
const store = createStore(rootReducer);

export default store;
