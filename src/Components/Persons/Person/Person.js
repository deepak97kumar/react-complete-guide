import React from 'react';
import './Person.css'

const person = (props) => {
    console.log('Person.js rendering...  Component Lifecycle stage4-render children')
    return (
        <div className="person">
            <p onClick={props.click}>I'm a {props.Name}! and i'm {props.Age} years old</p>
            <p>{props.children}</p>
            <input type="text" name="personName"value={props.Name} onChange={props.changed} />
        </div>
    );
}

export default person;