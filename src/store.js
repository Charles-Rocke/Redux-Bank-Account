// Learn redux in isolation
import { createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      // if
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    // in redux Dont throw a new error
    default:
      return state;
  }
}

// create redux store
const store = createStore(reducer);

// dispatch actions from store
store.dispatch({ type: "account/deposit", payload: 500 });

console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 200 });

console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    loanPurpose: "Buy Tailwind",
  },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoan" });
console.log(store.getState());
