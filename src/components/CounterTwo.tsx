import React from 'react';

interface CounterTwoProps{
    count:number,
    increment:()=>void,
    deIncrement:()=>void
}

function CounterTwo(props:CounterTwoProps) {
    return (
        <div>
            <h1>Counter Two</h1>
            <h2>{props.count}</h2>
            <button onClick={props.increment }>Increment</button>
            <button onClick={props.deIncrement }>De Increment</button>
        </div>
    );
}

export default CounterTwo;