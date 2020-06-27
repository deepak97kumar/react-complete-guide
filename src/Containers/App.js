import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import CockPit from '../Components/Cockpit/Cockpit';
import './App.css';


class App extends Component {
  state = {
    persons: [
      { id: "hbhbhb", Name: "Deepak", Age: 34 },
      { id: "rytrr", Name: "Richi", Age: 26 },
      { id: "sa7yh", Name: "Viraj", Age: 1.5 }
    ],
    otherState: "Thisn is other State",
    canShowPerson: false
  };

  togglePersonSection = () => {
    this.setState({
      canShowPerson: !this.state.canShowPerson
    })
  }

  removePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    // approch 1
    // let person = {...this.state.persons.find(p=>p.id === id)};

    // approch 2
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    let person = { ...this.state.persons[personIndex] };
    person.Name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null;

    if (this.state.canShowPerson) {
      persons = //(
        //<div className="persons">
          <Persons 
          allPersons={this.state.persons} 
          clicked={this.removePerson}
          changed={this.nameChangedHandler}/>
        //</div>
      //)
    }

    return (
      <div className="App">
        <CockPit
           togglePersonSection={this.togglePersonSection} 
           title={this.props.appTitle}/>
        {persons}
      </div>
    );
  }
}

export default App; 
