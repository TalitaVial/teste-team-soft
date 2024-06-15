import React from "react";
import "./radioGroup.css";
import RadioButton from "../radioButton/radioButton";

interface Option {
  label: string;
  value: number;
}

interface RadioGroupProps {
  options: Option[];
}

export default function RadioGroup({ options }: RadioGroupProps) {
  return (
    <div className="container__chekBox">
      <form className="container--item">
        {options.map((option, i) => (
          <RadioButton key={i} {...option} />
        ))}
      </form>
    </div>
  );
}
