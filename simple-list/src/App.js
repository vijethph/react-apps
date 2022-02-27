import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// React.memo works only for props which are of primitive types like String, Boolean etc., but not arrays and objects. Here changeTitleHandler is an object which contains a function, and it gets re-created and evaluated on every state change, hence getting its value changed; therefore React.memo re-evaluates the Button component
// useCallback() is a hook that allows us to store a function across component executions. To use it, wrap the function with it i.e., pass the function as an argument to it.
// useCallback() also needs a second argument: an array of dependencies, similar to useEffect(). However, in this example, as we know that the function object is not going to change, there is no need to specify it in second argument
