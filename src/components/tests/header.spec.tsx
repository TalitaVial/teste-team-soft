import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from '../header/header';
import { ContextOrders } from "../../provider/contextOrders";
import addresses from '../header/data/address';

const renderComponente = () =>{
    const mockOrders = { orders: [] }; 
    render(
        <ContextOrders.Provider value={mockOrders}>
          <Header />
        </ContextOrders.Provider>
      );
}

describe("Header", () => {
  it("should render correctly additional header tittle application", () => {
    renderComponente();
    expect(screen.getByText('Entrega:')).toBeInTheDocument();
  });

  it("should render correctly additional header IMG header--arrow application",()=>{
    renderComponente();
    const arrowImage = screen.getByAltText('arrow');
    expect(arrowImage).toBeInTheDocument();
  });

  it("should render correctly additional header IMG header--deliverize application",()=>{
    renderComponente();
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });
  it("should render the select element correctly", () => {
    renderComponente();
    addresses.forEach((address) => {
      const optionElement = screen.getByText(address.address);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("should change value when an option is selected", () => {
      renderComponente();
      const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
      fireEvent.change(selectElement, { target: { value: addresses[0].address } });
      expect(selectElement.value).toBe(addresses[0].address);
  });
});

