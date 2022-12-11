// @ts-ignore
import {render, screen} from "@testing-library/react";
import CounterTwo from "../components/CounterTwo";
import userEvent from "@testing-library/user-event";

describe("counter two component test", ()=>{
    test('Render counter two success', () =>{
        const incrementFn = jest.fn();
        const deIncrementFn = jest.fn();
        const count = 0;
        render(<CounterTwo count={count} increment={incrementFn} deIncrement={deIncrementFn} />);
        const headingElement = screen.getByText(/counter two/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('Render counter two with initial count value', async () =>{
        const incrementFn = jest.fn();
        const deIncrementFn = jest.fn();
        const count = 0;
        render(<CounterTwo count={count} increment={incrementFn} deIncrement={deIncrementFn} />);
        const headingElement = screen.getByRole("heading",{
            level:2
        });
        expect(headingElement).toHaveTextContent("0");
    });

    test('Render counter two test click function', async () =>{
        const incrementFn = jest.fn();
        const deIncrementFn = jest.fn();
        const count = 0;
        render(<CounterTwo count={count} increment={incrementFn} deIncrement={deIncrementFn} />);
        const  incrementButton = screen.getByRole("button",{
            name:"Increment"
        });
        const  deIncrementButton = screen.getByRole("button",{
            name:"De Increment"
        });
        await userEvent.click(incrementButton)
        await userEvent.click(deIncrementButton)
        expect(incrementFn).toHaveBeenCalledTimes(1);
        expect(deIncrementFn).toHaveBeenCalledTimes(1);
    });
});