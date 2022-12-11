import React, { useState } from "react";
import "./App.scss";
import CounterTwo from "./components/CounterTwo";
import User from "./components/User";
import UserDisplay from "./components/users/UserDisplay";

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const deIncrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <CounterTwo
        count={count}
        increment={increment}
        deIncrement={deIncrement}
      />
      <User />
      <UserDisplay />
    </div>
  );
}

export default App;
