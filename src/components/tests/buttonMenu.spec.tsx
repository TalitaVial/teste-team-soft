import React from 'react'; 
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ButtonMenu from "../buttonMenu/buttonMenu";

interface RenderComponenteFunction {
    (): ReturnType<typeof render>;
}
  

const renderComponente: RenderComponenteFunction = () => {
    return render(<ButtonMenu onChangeValue={() => {}} />);
};

describe("ButtonMenu",()=>{
    it('should render correctly ButtonMenu component', () => {
        renderComponente();
  
    });

    it('should render correctly ButtonMenu component click remove item', () => {
        renderComponente();
        const addButton = screen.getByAltText('add');
        const removeButton = screen.getByAltText('remove');

        const itemCount = screen.getByTestId('item-count');
        expect(itemCount.textContent).toBe('0');

        fireEvent.click(addButton);
        fireEvent.click(removeButton);

        expect(itemCount.textContent).toBe('0');
  
    });

    it('should render correctly ButtonMenu component click add item', () => {
        renderComponente();
        const addButton = screen.getByAltText('add');

        const itemCount = screen.getByTestId('item-count');
        expect(itemCount.textContent).toBe('0');

        fireEvent.click(addButton);
        fireEvent.click(addButton);


        expect(itemCount.textContent).toBe('2');
  
    });

    it("should render correctly img remove button",()=>{
        renderComponente();
        const imageRemove = screen.getByAltText('remove');
        expect(imageRemove).toBeInTheDocument();
    });

    it("should render correctly img add button",()=>{
        renderComponente();
        const imageAdd = screen.getByAltText('add');
        expect(imageAdd).toBeInTheDocument();
    });
})
