import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import CockPit from '../Components/Cockpit/Cockpit';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor, Component Lifecycle Stage1")

    //state can be initilized here. any ways if we do not initillizing it in constructor
    // and doing it as we are doing it here, React in the backgrount create the constructor
    // for us and initlize the state inside constructor. i.e.

    // state = {
    //   persons: [
    //     { id: "hbhbhb", Name: "Deepak", Age: 34 },
    //     { id: "rytrr", Name: "Richi", Age: 26 },
    //     { id: "sa7yh", Name: "Viraj", Age: 1.5 }
    //   ],
    //   otherState: "Thisn is other State",
    //   canShowPerson: false
    // };
  }
  state = {
    persons: [
      { id: "hbhbhb", Name: "Deepak", Age: 34 },
      { id: "rytrr", Name: "Richi", Age: 26 },
      { id: "sa7yh", Name: "Viraj", Age: 1.5 }
    ],
    otherState: "Thisn is other State",
    canShowPerson: false
  };

  // this is a static method =, so we have to add static in front of ot
  static getDerivedStateFromProps(props, state) {
    // you shoukd return the updated state from here
    console.log('[App.js] getDerivedStateFromProps, Component Lifecycle Stage2', props)

    return state;
  }

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
    console.log('[App.js] render method Component Lifecycle stage3')
    let persons = null;

    if (this.state.canShowPerson) {
      persons = <Persons
          allPersons={this.state.persons}
          clicked={this.removePerson}
          changed={this.nameChangedHandler} />
    }

    return (
      <div className="App">
        <CockPit
          togglePersonSection={this.togglePersonSection}
          title={this.props.appTitle} />
        {persons}
      </div>
    );
  }

  componentDidMount(){
    // http request can go here.
    console.log('[App.js] componentDidMount   Component Lifecycle stage5');
  }

  // there are more hooks but there will be removed at somtime in future.
  // componentWillMount(){
  //   console.log('[App.js componentwillMount can be replace wil getDerivedStateFromProps')
  // }
}

export default App; 
