import React from 'react'
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Loading from "../loading/loading"

const renderComponent = () =>{
    render(
        <Loading/>
    )
}

describe('Loading',()=>{
    it('should render correctly',()=>{
        renderComponent();
    });

    it("should render correctly additional header IMG loading application",()=>{
        renderComponent();
        const imageLoading = screen.getByAltText('Loading');
        expect(imageLoading).toBeInTheDocument();
    });
})