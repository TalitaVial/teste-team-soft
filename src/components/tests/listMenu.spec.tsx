import React from 'react'; 
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ListMenu from '../listMenu/listMenu';

interface Order {
    item: string;
    valor: number;
    onChangeValue?: () => void;
}

const renderComponente = (orders: Order) =>{
    render(
        <ListMenu item={orders.item} valor={orders.valor} onChangeValue={() => {}}/>
    )
}

describe('ListMenu',()=>{
    it('should render correctly', () => {
        const order = { item: 'Pizza', valor: 15 };
        renderComponente(order);

        const itemElement = screen.getByTestId('list-menu');
        expect(itemElement).toBeInTheDocument();

        const itemTextElement = screen.getByText(`${order.item}`);
        expect(itemTextElement).toBeInTheDocument();

        const valorElement = screen.getByText(`+ R$${order.valor}`);
        expect(valorElement).toBeInTheDocument();
    })
})
