import React, { useState } from "react";

export const ContextOrder = React.createContext();


export const ContextOrderProvider = (props) => {
  const [orders, setOrders] = useState([
    // { id: '',
    //   nm_product: '' ,
    //   description: ,
    //   vl_price:,
    //   vl_sale:,
    //   ingredients: [{}],
    //   cutlery: ,
    // }
  ]);

  return (
    <ContextOrder.Provider value={{ orders, setOrders }}>
      {props.children}
    </ContextOrder.Provider>
  );
};
