import React from 'react';
import RadioButton from '../radioButton/radioButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

interface RadioButtonProps {
    label?: string;
    valeu?: number;
}

const renderComponent = (mockProperties: RadioButtonProps) =>{
    render(
        <RadioButton {...mockProperties}/>
    )
}

describe('Radio Button', () =>{
    it('should render correctly component', ()=>{
        renderComponent({});
    });

    it('should render correctly radioComponent',() =>{
        renderComponent({});
        const radioComponent = screen.getByTestId('radio-component');
        expect(radioComponent).toBeInTheDocument();
    });

    it('should render correctly', () =>{
        const mockPropeties = {label: 'text', value: 12};
        renderComponent(mockPropeties);
        const labelElement = screen.getByText('text');
        const inputElement = screen.getByDisplayValue('12');
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    })
})