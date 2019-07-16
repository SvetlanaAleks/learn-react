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
  // const clickButtonHandler = (newName) => {
  //   setPerssonState({
  //     persons: [{ name: newName, age: 24 }, { name: "Dima", age: 26 }]
  //   });
  // };
  const nameChangedHandler = (event) => {
    setPerssonState({
      persons: [{ name: "Sveta", age: 24 }, { name: event.target.value, age: 26 }]
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
  return (
    <div className="App">
      <h1>Hi!</h1>
      <button className="Button" onClick={togglePersonsHandler}>Toggle Person</button>
      {personState.showpersons === true ?
        <div>
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
        </div> : null
      }
    </div>
  );
};

export default App;
