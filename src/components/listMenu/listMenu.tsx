import React from 'react'
import ButtonMenu from "../buttonMenu/buttonMenu";
import "./listMenu.css";

interface ListMenuProps {
  item: string;
  valor: number;
  onChangeValue?: (value: number) => void;
}

const ListMenu = ({ item, valor, onChangeValue }: ListMenuProps) => {
  return (
    <div>
      <div className="card" data-testid="list-menu">
        <div className="card__item">
          <p className="card--title">{item}</p>
          <p className="card--money">+ R${valor}</p>
        </div>
        <ButtonMenu onChangeValue={onChangeValue || (() => {})} />
      </div>
      <div className="card__line"></div>
    </div>
  );
}

export default ListMenu;
