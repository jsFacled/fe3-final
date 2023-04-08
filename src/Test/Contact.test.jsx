import { render, screen } from "@testing-library/react"
import Contact from "../Routes/Contact"

describe("El componente Card",()=>{
    test('Se renderiza coreectamente', () => { 
        render(<Contact/>);
        const componente = screen.getByText("Send");
        expect(componente).toBeInTheDocument();
     })
})

