import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {userActions: []};
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <div className="widgets-area"></div>
                    <div className="report-area"></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
