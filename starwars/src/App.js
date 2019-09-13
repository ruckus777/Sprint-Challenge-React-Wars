import React from "react";
import "./App.css";

function Char({ index }) {
  const [char, setChar] = useState(0);
  const fetchChar = index =>
    fetch(`http https://swapi.co/api/people/$(index)`)
      .then(response => response.json())
      .then(char => {
        console.log(char);
        setChar(char);
      });

  return (
    <div className="character">
      <div>{Char}</div>
      <button onClick={e => fetchChar(index)}>Get Character</button>
    </div>
  );
}
 
const App = () => {
  const [index, setIndex] = useState(0);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
