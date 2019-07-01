import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

import Chat from './components/Chat';

// const Row = require('react-bootstrap').Row;
// const Col = require('react-bootstrap').Col;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Chat />
            </div>
        );
    }
}

export default App;



// WEBPACK FOOTER //
// ./src/App.js