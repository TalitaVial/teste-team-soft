import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from '../header/header';
import { ContextOrders } from "../../provider/contextOrders";
import addresses from '../header/data/address';

interface Order {
  id: number;
}

const renderComponente = (orders: Order[] = []) =>{
    const mockOrders = { orders }; 
    render(
        <ContextOrders.Provider value={mockOrders}>
          <Header />
        </ContextOrders.Provider>
      );
};

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

  it("should render correctly additional header IMG header--user application",()=>{
     renderComponente();
     const logoUser = screen.getByAltText('user');
     expect(logoUser).toBeInTheDocument();
  });

  it("should render correctly additional header Logged application", () => {
    renderComponente();
    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });

  it("should show the correct total orders in the notification badge", () =>{
    const mockOrders = [{id: 1}, {id: 2}, {id: 3}];
    renderComponente(mockOrders);
    const notificationBadge = screen.getByText(mockOrders.length.toString());
    expect(notificationBadge).toBeInTheDocument();
  });

  it("should not show the notification badge if there are no orders",()=>{
    renderComponente();
    const notificationBadge = screen.queryByText('0');
    expect(notificationBadge).not.toBeInTheDocument();
  })
  
  it("should render correctly additional header IMG header--user shopping application",()=>{
    renderComponente();
    const logoshopping = screen.getByAltText('shopping');
    expect(logoshopping).toBeInTheDocument();
  });

  it("should render correctly additional header tittle shopping application", () => {
    renderComponente();
    expect(screen.getByText('Carrinho')).toBeInTheDocument();
  });

});

