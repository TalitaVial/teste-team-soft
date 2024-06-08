import React from 'react';

interface RadioButtonProps {
  label?: string;
  value?: number;
}

const RadioButton = ({label, value}: RadioButtonProps) => {
  return (
    <label htmlFor={`radio${label}`} data-testid="radio-component">
      <span>{label}</span>
      <input
        key={value}
        id={`radio${label}`}
        name="radio"
        type="radio"
        value={value}
      />
      <div className="custom--radio">
        <span></span>
      </div>
    </label>
  );
}

export default RadioButton;
