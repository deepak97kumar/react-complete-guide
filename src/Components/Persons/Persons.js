import React from 'react';
import Person from '../Persons/Person/Person';

// in ES6 if we start pranthsis just after arrow, we  can omit the return statment as whatever we write
//  after pranthasis function will return it.(The commented code)
// const persons = (props) => (  
//     props.allPersons.map((p, i) => {
//       return <Person 
//       Name={p.Name} 
//       Age={p.Age}
//       click={this.removePerson.bind(this, i)}
//       key={p.id}
//       nameChanged={(event, id) => this.nameChangedHandler(event, p.id)} />
//     }) 
// )

// We can even omit the pranthsis as we are writing the javascript only not the JSX. though 
// map mathod return the JSX.

const persons = (props) => {
  console.log('Persons.js rendering...  Component Lifecycle stage4-render children')
  return props.allPersons.map((p, i) => {
    return <Person 
    Name={p.Name} 
    Age={p.Age}
    click={props.clicked.bind(this, i)}
    key={p.id}
    changed={(event, id) => props.changed(event, p.id)} />
  })};

export default persons;