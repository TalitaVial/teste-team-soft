import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Popover from './components/popover';

import Header from "./components/header";
import OrderPage from "./components/orderPage";
import { ContextOrdersProvider } from "./provider/contextOrders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextOrdersProvider>
    <Header />
    <OrderPage />
    {/* <Popover/> */}
    </ContextOrdersProvider>
  </React.StrictMode>
);
