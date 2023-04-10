import React, { useState } from "react";

export const ContextOrders = React.createContext();

export const ContextOrdersProvider = (props) => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  return (
    <ContextOrders.Provider value={{ orders, setOrders }}>
      {props.children}
    </ContextOrders.Provider>
  );
};
