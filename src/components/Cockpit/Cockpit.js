import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
   let btnClasses = '';
   let assignedClasses = [];
   if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
   }
   if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
   }
   if (props.showPersons) {
      btnClasses = classes.Red;
   }
   return (
      <div className={classes.Cockpit}>
         <h1>Hi, I'm a React App</h1>
         <p className={assignedClasses.join(' ')}>This is really working!</p>
         <button
            className={btnClasses}
            onClick={props.click}>Toggle Persons</button>
      </div>
   );
};

export default cockpit;
