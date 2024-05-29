// additionalOrder.tsx
import React from 'react';
import "./additionalOrder.css";

interface AdditionalOrderProps {
  titulo: string;
  descricao: string;
}

const AdditionalOrder = ({ titulo, descricao }: AdditionalOrderProps) => {
  return (
    <div className="container__ToAdd">
      <p className="container__text">{titulo}</p>
      <p className="container__text--limit">{descricao}</p>
    </div>
  );
}

export default AdditionalOrder;
