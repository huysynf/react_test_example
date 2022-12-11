import React, { useState } from "react";
import "./App.scss";
import CounterTwo from "./components/CounterTwo";
import User from "./components/User";
import UserDisplay from "./components/users/UserDisplay";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import { p } from "msw/lib/SetupApi-b2f0e5ac";
import Home from "./pages/Home";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user/1" element={<UserDisplay />} />
          <Route path="users" element={<User />} />
          <Route
            path="couter"
            element={
              <CounterTwo
                count={count}
                increment={increment}
                deIncrement={deIncrement}
              />
            }
          />
          <Route path="*" element={<p>No Match</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
