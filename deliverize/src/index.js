import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/header";
import OrderPage from "./components/orderPage";
import { ContextOrdersProvider } from "./provider/contextOrders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextOrdersProvider>
      <Header />
      <OrderPage />
    </ContextOrdersProvider>
  </React.StrictMode>
);
