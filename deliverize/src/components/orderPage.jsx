import Burguer from "../assets/foto.png";
import "../styles/orderPage.css";
import ListMenu from "./listMenu";
import ButtonMenu from "./buttonMenu";
import RadioGroup from "./radioGroup";
import AdditionalOrder from "./additionalOrder";
import Loading from "./loanding";
import api from "../services/api";
import Popover from "./popover";

import React, { useEffect, useState } from "react";

export default function OrderPage() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [popover, setPopover] = useState(false);

  const getIngredients = () => {
    const indexIngredients = 0;
    if (!product) return {};
    return product.ingredients[indexIngredients].itens;
  };

  useEffect(() => {
    const getProduct = async () => {
      const indexProduct = 0;
      try {
        const response = await api.get("");
        const data = response.data;
        setProduct(data[indexProduct]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const registerOrder = (e) => {
    e.preventDefault();
    if (e) {
      setPopover(true);
      setTimeout(() => {
        setPopover(false);
      }, "1000");
    }
  };

  return (
    <div className="container">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="container__webBurger">
            {popover && <Popover />}
            <div className="container__Burger">
              <img
                className="container--imgBurger"
                src={Burguer}
                alt="FotoBurger"
              />
            </div>

            <div className="container__description">
              <div className="container--title">
                <h3>{product.nm_product}</h3>
              </div>
              <div className="container__ingredients">
                <p>{product.description}</p>
              </div>
              <div className="container--money">
                <p className="container--money--sale">
                  R${product.vl_discount}
                </p>
                <p className="container--money--noSale">R${product.vl_price}</p>
              </div>
            </div>
          </div>
          <div className="container__menu">
            <div className="container__menu--itens">
              <AdditionalOrder
                titulo="Adicionar Ingredientes"
                descricao="Até 8 ingredientes."
              />
              {getIngredients().map((ingredient, i) => (
                <ListMenu
                  key={i}
                  item={ingredient.nm_item}
                  valor={ingredient.vl_item}
                />
              ))}
              <AdditionalOrder titulo="Precisa de Talher?" />
              <RadioGroup
                options={[
                  { value: 1, label: "Sim" },
                  { value: 0, label: "Não" },
                ]}
              />

              <div className="container__btn">
                <ButtonMenu />
                <button
                  onClick={(e) => registerOrder(e)}
                  className="container--btnToAdd"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
