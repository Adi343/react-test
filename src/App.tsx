import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./CustomButton/CustomButton";

function App() {
  return (
    <div className="App">
      <h3>Hello World</h3>
      <CustomButton
        title={"Let's go"}
        handleClick={() => console.log("Hello world")}
      />
    </div>
  );
}

export default App;
