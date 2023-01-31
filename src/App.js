import React, { useState, useEffect, useCallback } from "react";
import { changeColor } from "./changeColor";
import './App.css';

function App() {

  const [tips, setTips] = useState("");
  const [bgColor, setBgColor] = useState();

  const fetchTips = useCallback(async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity);
  }, []);

  useEffect(() => {
    fetchTips();
  }, [fetchTips]);

  const handleFetchTips = () => {
    changeColor(bgColor, setBgColor);
    fetchTips();
  }

  return (
    <div className="container">
      <p className="quote"> {tips} </p>
      <button onClick={handleFetchTips} className="button">New quote</button>
    </div>
  );
}

export default App;
