import React from "react";
import "./popover.css";
import { ContextOrders } from "../../provider/contextOrders";

export default function Popover({ order }) {
  const { orders = []} = React.useContext(ContextOrders);
  return (
    <div className="container_pop">
      <div className="container__title">
        <p>Adicionado com Sucesso</p>
      </div>
      <div className="container--popover">
        <p className="container--sale">{orders[0]?.nm_product}</p>
        <p className="container--text">Ingredientes</p>
        <ul className="container--list">
          {order?.ingredients?.map((ingredient, i) => (
            <li key={i} className="container--list--item">
              {ingredient.qntd} {ingredient.nm_item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
