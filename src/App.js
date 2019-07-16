import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPerssonState] = useState({
    persons: [
      { name: "Sveta", age: 24 },
      { name: "Dima", age: 25 }
    ],
    showpersons: false
  });

  const nameChangedHandler = (event) => {
    setPerssonState({
      persons: [
        { name: "Sveta", age: 24 },
        { name: event.target.value, age: 26 }
      ],
      showpersons: true
    });
  }
  const togglePersonsHandler = (event) => {
    const doesShow = personState.showpersons;
    setPerssonState({
      persons: [
        { name: "Sveta", age: 24 },
        { name: "Dima", age: 25 }
      ],
      showpersons: !doesShow
    })
  };
  let persons = null;
  if (personState.showpersons) {
    persons = <div>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changed={nameChangedHandler.bind(this)}
        currentName={personState.persons[1].name}>
        His hobby
        </Person>
    </div>
  };
  return (
    <div className="App">
      <h1>Hi!</h1>
      <button className="Button" onClick={togglePersonsHandler}>Toggle Person</button>
      {persons}
    </div>
  );
};

export default App;
