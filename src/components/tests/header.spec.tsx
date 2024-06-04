import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from '../header/header';
import { ContextOrders } from "../../provider/contextOrders";

describe("Header", () => {
  it("should render correctly additional header application", () => {
    const mockOrders = { orders: [] }; 
    render(
      <ContextOrders.Provider value={mockOrders}>
        <Header />
      </ContextOrders.Provider>
    );
    expect(screen.getByText('Entrega:')).toBeInTheDocument();
  });
});
