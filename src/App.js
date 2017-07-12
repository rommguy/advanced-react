import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-custom-scroll/dist/customScroll.css'
import Footer from './comps/Footer';
import WidgetsArea from './comps/WidgetsArea'
import ReportArea from './comps/ReportArea'

class App extends Component {
    constructor() {
        super();
        this.state = {userActions: []};
    }

    reportAction = action => {
        this.setState({userActions: this.state.userActions.concat(action)});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <WidgetsArea reportAction={this.reportAction}/>
                    <ReportArea userActions={this.state.userActions}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
