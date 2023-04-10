import ButtonMenu from "./buttonMenu";
import "../styles/listMenu.css";

export default function ListMenu({item, valor, onChangeValue}) {
  return (
    <div>
      <div className="card">
        <div className="card__item">
          <p className="card--title">{item}</p>
          <p className="card--money">+  R${valor}</p>
        </div>
        <ButtonMenu onChangeValue={onChangeValue}/>
      </div>
      <div className="card__line"></div>
    </div>
  );
}
