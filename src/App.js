import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPerssonState] = useState({
    persons: [{ name: "Sveta", age: 24 }, { name: "Dima", age: 25 }]
  });

  const clickButtonHandler = (newName) => {
    setPerssonState({
      persons: [{ name: newName, age: 24 }, { name: "Dima", age: 26 }]
    });
  };
  const nameChangedHandler = (event) => {
    setPerssonState({
      persons: [{ name: "Sveta", age: 24 }, { name: event.target.value, age: 26 }]
    });
  }

  return (
    <div className="App">
      <h1>Hi!</h1>
      <button className="Button" onClick={clickButtonHandler.bind(this, 'Svitlana')}>Swiches</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={clickButtonHandler.bind(this, 'Sveta!!!')}
        changed={nameChangedHandler.bind(this)}>
        His hobby
      </Person>
    </div>
  );
};

export default App;
