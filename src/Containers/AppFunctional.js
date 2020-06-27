import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {

    const [personState, setPersonState] = useState({
        persons: [
            { Name: "Deepak", Age: 34 },
            { Name: "Richi", Age: 26 },
            { Name: "Viraj", Age: 1.5 }
        ]
    });

    const [otherState, setOtherState] = useState("Other State Value")

    console.log(personState, otherState);

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { Name: "Deepak Kumar", Age: 34 },
                { Name: "Richi", Age: 27 },
                { Name: "Viraj Keshri", Age: 1.5 }
            ]
        });

        console.log(personState, otherState);
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>this is working</p>
            <button name="switchName" onClick={switchNameHandler}>Switch Name</button>
            <Person Name={personState.persons[0].Name} Age={personState.persons[0].Age} />
            <Person Name={personState.persons[1].Name} Age={personState.persons[1].Age} />
            <Person Name={personState.persons[2].Name} Age={personState.persons[2].Age}>Ducks are my Favorite</Person>
        </div>
    );
};

export default app;