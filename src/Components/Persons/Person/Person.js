import React, { Component } from 'react';
import './Person.css'

// Functional Component
/*const person = (props) => {
    console.log('Person.js rendering...  Component Lifecycle stage4-render children')
    return (
        <div className="person">
            <p onClick={props.click}>I'm a {props.Name}! and i'm {props.Age} years old</p>
            <p>{props.children}</p>
            <input type="text" name="personName"value={props.Name} onChange={props.changed} />
        </div>
    );
}
export default person;*/

// class beased component
class Person extends Component {

    render() {
        console.log('Person.js rendering...  Component Lifecycle stage4-render children')
        return (
            <div className="person">
                <p onClick={this.props.click}>I'm a {this.props.Name}! and i'm {this.props.Age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" name="personName" value={this.props.Name} onChange={this.props.changed} />
            </div>
        );
    }
}

export default Person;