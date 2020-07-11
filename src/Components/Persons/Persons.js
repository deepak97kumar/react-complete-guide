import React, { Component } from 'react';
import Person from '../Persons/Person/Person';

/*
// functional component
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

export default persons;*/

// class beased component

class Persons extends Component {
  static getDerivedStateFromProps(state, props){
    console.log("[Persons.js]  getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
  }
  render() {
    console.log('Persons.js rendering...  Component Lifecycle stage4-render children')
    return this.props.allPersons.map((p, i) => {
      return (
        <Person
          Name={p.Name}
          Age={p.Age}
          click={this.props.clicked.bind(this, i)}
          key={p.id}
          changed={(event, id) => this.props.changed(event, p.id)} />);
    });
  }

  componentDidUpdate(){
    console.log("[Persons.js] componentDidUpdate");
  }
}


export default Persons