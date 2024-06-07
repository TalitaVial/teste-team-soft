import arrow_left from "../../assets/arrow_left.png";
import Deliverize from "../../assets/Deliverize.svg";
import user from "../../assets/user.svg";
import shopping from "../../assets/shopping.svg";
import "./header.css";
import { ContextOrders } from "../../provider/contextOrders";
import React from "react";
import addresses from './data/address'

export default function Header() {
  const { orders = []} = React.useContext(ContextOrders);
  var total = orders.length;

  return (
    <div className="header">
      <div className="header__logo">
        <img className="header--arrow" src={arrow_left} alt="arrow" />
        <img className="header--deliverize" src={Deliverize} alt="Logo" />
      </div>
      <div className="header--web">
        <div className="header__selected">
          <p className="header--placeholder">Entrega:</p>
          <select name="selected" id="selected">
          {addresses.map((item, index) => (
              <option key={index} value={item.address}>{item.address}</option>
            ))}
          </select>
        </div>
        <input
          className="header__search"
          type="search"
          name="search"
          id="search"
          placeholder="Busque por estabelecimento ou produtos"
        />
        <div className="header__login">
          <div className="header--user">
            <img className="header--user--img" src={user} alt="user" />
            <p className="header--text">Entrar</p>
          </div>
          <div className="header--user">
            {total >= 1 && <div className="header--notification" data-testid="notification-badge">{total}</div>}
            <img className="header--user--img" src={shopping} alt="shopping" />
            <p className="header--text">Carrinho</p>
          </div>
        </div>
      </div>
    </div>
  );
}
