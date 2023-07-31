import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// legacy way of connecting with reducx
export default connect(mapStateToProps)(BalanceDisplay);
