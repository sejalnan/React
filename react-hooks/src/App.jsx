import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import ToDo from "./components/ToDo";

let num = 5;

function App() {
  const [counter, setCount] = useState(0);
  const [color, setColor] = useState("black");
   const [bgcolor, setBgColor] = useState("white");

  function Icount(value) {
    setCount(counter + value);
    setColor("green");
    console.log("Increase Count", counter + value);
  }

  function Dcount(value) {
    setCount(counter - value);
    setColor("red");
    console.log("Decrease Count", counter - value);
  }

  function Reset() {
    setCount(0);
    setColor("red");
    console.log("Reset Count", 0);
  }

  const onInputChange =(e)=>{
    setBgColor(e.target.value);
  }

  return (
    <>
  
    <ToDo/>
    <div
      style={{
        backgroundColor: "blueviolet",
        padding: "10px",
        margin: "10px",
        color: "black",
      }}
    >     
      <button className="button" onClick={() => Icount(num)}>
        +
      </button>

      <span style={{ color: color }}> {counter}</span>

      <button
        className="button"
        disabled={counter === 0}
        onClick={() => Dcount(num)}
      >
        -     
      </button>

      <button className="button" onClick={Reset}>
        <b>Reset</b>
      </button>
      
    </div>
    
    </>
  );
}

export default App;
