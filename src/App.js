import React, { useState, useEffect } from "react";
import Colors from "./Colors";

import './App.css';

function App() {

  
  const [tips, setTips] = useState("");
  const fetchTips = async () => {
  const response = await fetch(

      "http://www.boredapi.com/api/activity/"

    );

   const data = await response.json();

   setTips(data.activity);

  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (

    <div className="container">
    <p> {tips} </p>
      <button onClick={fetchTips}>New quote</button>
      <Colors/>
    </div>

  );

}



export default App;