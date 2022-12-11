import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;