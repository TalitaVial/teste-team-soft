import React from 'react';
import Popover from '../popover/popover';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ContextOrders } from '../../provider/contextOrders';

interface Ingredient {
  qntd: number;
  nm_item: string;
  vl_item: number;
}

interface Order {
  id: number;
  nm_product: string;
  ingredients: Ingredient[];
}

const renderComponent = (order: Order, orders: Order[] = []) => {
  const mockOrders = { orders };
  render(
    <ContextOrders.Provider value={mockOrders}>
      <Popover order={order} />
    </ContextOrders.Provider>
  );
};

describe('Popover', () => {
  it('should render correctly component popover', () => {
    const mockOrder = {
      id: 1,
      nm_product: 'Hamburguer',
      ingredients: [
        {
          qntd: 1,
          nm_item: 'Queijo Cheddar',
          vl_item: 4.99,
        },
      ],
    };

    const mockOrders = [mockOrder];
    renderComponent(mockOrder, mockOrders);
  });

  it('should render correctly title component popover', () => {
    const mockOrder = {
      id: 1,
      nm_product: 'Hamburguer',
      ingredients: [
        {
          qntd: 1,
          nm_item: 'Queijo Cheddar',
          vl_item: 4.99,
        },
      ],
    };

    renderComponent(mockOrder);
    const titlePopover = screen.getByText('Adicionado com Sucesso');
    expect(titlePopover).toBeInTheDocument();
  });
});
