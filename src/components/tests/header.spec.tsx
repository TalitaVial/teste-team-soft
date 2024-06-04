import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from '../header/header';
import { ContextOrders } from "../../provider/contextOrders";

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
  })
});

