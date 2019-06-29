import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Business from './components/Business';

const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Business />
            </div>

        );
    }
}



class Header extends Component {
    render() {
        return (
            <div align-content="center" justify-content="center">
                <header className="App-header">
                    <Row className="show-grid">
                        <Col xs={4} md={4}></Col>
                        <Col xs={4} md={4}>
                            <img src='/img/logo.png' alt="logo" height="120px" />
                        </Col>
                        <Col xs={4} md={4}>

                        </Col>
                    </Row>
                </header>
            </div>
        );
    }
}


export default App;



// WEBPACK FOOTER //
// ./src/App.js