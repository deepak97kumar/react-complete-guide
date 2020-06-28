import React from 'react';

const cockpit = (props) => {
    const buttonStyle = {
        backgroundColor: 'white',
        font: 'inharit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer' //limitation in inline style (hover doesn't works)
      }
      console.log('Cockpit.js rendering...  Component Lifecycle stage4-render children')
    return (
        <div>
            <h1>{props.title}</h1>
            <p>this is working</p>

            <button name="switchName" style={buttonStyle}
                onClick={props.togglePersonSection}>Show Persons</button>
        </div>
    );
}

export default cockpit;