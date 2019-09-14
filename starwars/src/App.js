import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardSW from "./components/CardSW.js";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map((value, key) => {
        return <CardSW key={key} value={value} />;
      })}
    </div>
  );
};

export default App;
