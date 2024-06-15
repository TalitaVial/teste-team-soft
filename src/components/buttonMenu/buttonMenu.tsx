import React, { FC } from 'react';
import "./buttonMenu.css";
import remove from "../../assets/remove.png";
import add from "../../assets/add.png";
import { useState } from "react";

interface ButtonMenuProps {
  onChangeValue: (value: number) => void;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ onChangeValue }) => {
  const [items, setItems] = useState(0);

  const handleRemoveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (items >= 1) {
      const removeItem = items - 1;
      onChangeValue(removeItem);
      setItems(removeItem);
      return;
    }
  };

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (items <= 7) {
      const addItem = items + 1;
      onChangeValue(addItem);
      setItems(addItem);
      return;
    }
  };

  return (
    <div className="contain__btn">
      <div className="btn">
        <div className="btn__img">
          <button
            onClick={(e) => handleRemoveItem(e)}
            className="btn__link--remove"
          >
            <img src={remove} alt="remove" />
            {items <= 0 && <div className="btn--remove--disable"></div>}
          </button>
        </div>
        <div data-testid="item-count">
          {items}
        </div>
        <div className="btn__img">
          <button onClick={(e) => handleAddItem(e)} className="btn__link--add">
            <img src={add} alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;
