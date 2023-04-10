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
import { ContextOrders } from "../provider/contextOrders";

export default function OrderPage() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [popover, setPopover] = useState(false);
  const { setOrders } = React.useContext(ContextOrders);
  const [order, setOrder] = useState({
    id: "",
    nm_product: "",
    description: "",
    vl_price: "",
    ingredients: [],
    cutlery: "",
    qntdOrder: 1,
  });

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

      const dados = {
        id: product.id,
        nm_product: product.nm_product,
        description: product.description,
        vl_price: product.vl_price,
        vl_sale: product.vl_discount,
      };
      setOrders((prev) => [...prev, dados]);
    }
  };

  const onChangeValue = (value) => {
    const copiaIngredients = order.ingredients;
    const indexIngredient = copiaIngredients.findIndex(
      ({ id }) => id === value.id
    );
    if (indexIngredient >= 0) {
      copiaIngredients[indexIngredient] = value;
      setOrder((prev) => ({ ...prev, ingredients: copiaIngredients }));
      return;
    }
    if (indexIngredient < 0) {
      setOrder((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, value],
      }));
      return;
    }
  };

  return (
    <div className="container">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="container__webBurger">
            {popover && <Popover order={order} />}
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
                  onChangeValue={(qntd) =>
                    onChangeValue({ ...ingredient, qntd })
                  }
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
                <ButtonMenu
                  onChangeValue={(totalOrder) =>
                    setOrder((prev) => ({ ...prev, qntdOrder: totalOrder }))
                  }
                />
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
