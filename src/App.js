import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  // state = {
  //   persons: [
  //     { id: 'a1', name: 'Max', age: 28 },
  //     { id: 'a2', name: 'Manu', age: 29 },
  //     { id: 'a3', name: 'Stephanie', age: 26 }
  //   ],
  //   showPersons: false
  // }

  // nameChangedHandler = (event, id) => {
  //   const personIndex = this.state.persons.findIndex(p => {
  //     return p.id === id;
  //   });

  //   const person = { ...this.state.persons[personIndex] };

  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex] = person;

  //   this.setState({
  //     persons: persons
  //   });
  // };

  // deletePersonHandler = (personIndex) => {
  //   const persons = [...this.state.persons];
  //   persons.splice(personIndex, 1);
  //   this.setState({ persons: persons });
  // }

  // togglePersonsHandler = () => {
  //   const doesShow = this.state.showPersons;
  //   this.setState({ showPersons: !doesShow });
  // }
  state = {
    userInput: ''
  };
  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  };
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };
  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       {this.state.persons.map((person, index) => {
    //         return <Person
    //           click={() => this.deletePersonHandler(index)}
    //           name={person.name}
    //           age={person.age}
    //           key={person.id}
    //           changed={(event) => this.nameChangedHandler(event, person.id)} />
    //       })}
    //     </div>
    //   );
    // }
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        cliked={() => this.deleteCharHandler(index)}
      />
    });
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
      // <div className="App">
      //   <h1>Hi, I'm a React App</h1>
      //   <p>This is really working!</p>
      //   <button
      //     style={style}
      //     onClick={this.togglePersonsHandler}>Toggle Persons</button>
      //   {persons}
      // </div>
    );
  }
}

export default App;
