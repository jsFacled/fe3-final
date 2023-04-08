import React from 'react';
import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";

// describe("El componente Card",()=>{
//     test('Se renderiza coreectamente', () => { 
//         render(<Card/>);
//         const componente = screen.getByText("1");
//         expect(componente).toBeInTheDocument();
//      })
// })

test('renders Card component', () => {
    render(<Card />);
    const cardElement =screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });