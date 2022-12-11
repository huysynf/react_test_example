// @ts-ignore
import {render, screen} from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("couter", ()=>{
    test('Should render Counter component', ()=> {
        render(<Counter />)
        const headingElement = screen.getByRole("heading",{
            level:1
        })
        expect(headingElement).toBeInTheDocument();
    });

    test('Should render initial couter value is 0', ()=> {
        render(<Counter />)
        const headingElement = screen.getByRole("heading",{
            level:2
        })
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toBeEnabled();
        expect(headingElement).toHaveTextContent("0");
    });

    test('Should render couter value when user click', async ()=> {
        render(<Counter />)
        const buttonInCrement = screen.getByRole('button');
       await userEvent.click(buttonInCrement);
        const headingElement = screen.getByRole("heading",{
            level:2
        })
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toBeEnabled();
        expect(headingElement).toHaveTextContent("1");
    });

});