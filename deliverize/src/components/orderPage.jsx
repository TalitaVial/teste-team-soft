import Burguer from "../assets/foto.png";
import "../styles/orderPage.css";
import ListMenu from "./listMenu";
import ButtonMenu from "./buttonMenu";
import RadioGroup from "./radioGroup";
import AdditionalOrder from "./additionalOrder";

export default function OrderPage() {
  return (
    <div className="container">
      <div className="container__webBurger">
        <div className="container__Burger">
          <img
            className="container--imgBurger"
            src={Burguer}
            alt="FotoBurger"
          />
        </div>
        <div className="container__description">
          <div className="container--title">
            <h3>Oferta picanha cheddar bacon</h3>
          </div>
          <div className="container__ingredients">
            <p>
              Delicioso hambúrguer de picanha, molho de picanha, ebola crispy,
              bacon, queijo cheddar, molho cheddar e pão mix de gergelim,
              acompanhamento e bebida.
            </p>
          </div>
          <div className="container--money">
            <p className="container--money--sale">R$31,99</p>
            <p className="container--money--noSale">R$34,95</p>
          </div>
        </div>
      </div>
      <div className="container__menu">
        <div className="container__menu--itens">
          <AdditionalOrder
            titulo="Adicionar Ingredientes"
            descricao="Até 8 ingredientes."
          />
          <ListMenu />
          <AdditionalOrder titulo="Precisa de Talher?" />
          <RadioGroup
            options={[
              { value: 1, label: "Sim" },
              { value: 0, label: "Não" },
            ]}
          />

          <div className="container__btn">
            <ButtonMenu />
            <button className="container--btnToAdd">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
