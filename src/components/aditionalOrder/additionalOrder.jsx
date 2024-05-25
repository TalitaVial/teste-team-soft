import "./additionalOrder.css";

export default function AdditionalOrder({ titulo, descricao }) {
  return (
    <div className="container__ToAdd">
      <p className="container__text">{titulo}</p>
      <p className="container__text--limit">{descricao}</p>
    </div>
  );
}
