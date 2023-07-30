import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// run code that is in the store.js file
import "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
