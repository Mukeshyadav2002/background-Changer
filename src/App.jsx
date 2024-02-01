import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState(() => {
  
    return localStorage.getItem("bgColor") || "black";
  });

  const changeBg = (color) => {
    setBgColor(color);
  };

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Pink",
    "Brown",
    "Black",
    "White",
  ];

  const handleClick = (color) => {
    return () => changeBg(color);
  };

  useEffect(() => {
   
    localStorage.setItem("bgColor", bgColor);
  }, [bgColor]); 

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div>
        <h2 style={{ color: bgColor === "White" ? "black" : "white" }}>
          BG-CHANGER
        </h2>
      </div>
      <div className="btnContainer">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={handleClick(color)}
            style={{
              backgroundColor: color.toLowerCase(),
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
