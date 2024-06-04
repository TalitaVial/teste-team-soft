// additionalOrder.test.tsx
import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import AdditionalOrder from "../aditionalOrder/additionalOrder";

describe('AdditionalOrder', () => {
    it("should render correctly additional order", () => {
        render(<AdditionalOrder titulo="Adicionar Ingredientes" descricao="Até 8 ingredientes." />);
        expect(screen.getByText('Adicionar Ingredientes')).toBeInTheDocument();
        expect(screen.getByText('Até 8 ingredientes.')).toBeInTheDocument();
    });
});
