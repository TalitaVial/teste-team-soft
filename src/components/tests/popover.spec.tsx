import React from 'react'
import Popover from '../popover/popover';
import { render, screen } from '@testing-library/react'
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
  

const renderComponent = (orders: Order[] = [])  =>{
    const mockOrders = { orders }; 
    render(
        <ContextOrders.Provider value={mockOrders}>
        <Popover order={mockOrders}/>
        </ContextOrders.Provider>
    );
}

describe('Popover', ()=>{
    it('should render correctly component popover',()=>{
        const mockOrders = [
            {
              id: 1,
              nm_product: 'Hamburguer',
              ingredients: [
                {
                  qntd: 1,
                  nm_item: "Queijo Cheddar",
                  vl_item: 4.99
                }
              ]
            }
          ];
        renderComponent(mockOrders);
    });

    it('should render correctly title component popover',()=>{
        renderComponent();
        const titlePopover = screen.getByText('Adicionado com Sucesso');
        expect(titlePopover).toBeInTheDocument();
    })
})