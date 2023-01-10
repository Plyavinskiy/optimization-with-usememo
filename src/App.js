import { useState } from "react";

import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";
import "./App.css";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = () => {
    setListTitle("New Title");
  };

  return (
    <div className="app">
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
};

export default App;
