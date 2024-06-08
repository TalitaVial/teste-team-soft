import ButtonMenu from "../buttonMenu/buttonMenu";
import "./listMenu.css";

export default function ListMenu({ item, valor, onChangeValue }) {
  return (
    <div >
      <div className="card" data-testid="list-menu">
        <div className="card__item" >
          <p className="card--title" >{item}</p>
          <p className="card--money">+ R${valor}</p>
        </div>
        <ButtonMenu onChangeValue={onChangeValue} />
      </div>
      <div className="card__line"></div>
    </div>
  );
}
