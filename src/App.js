import React, {Component} from "react";
import TopAppBar from "./components/TopAppBar";
import './App.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import HousingConnectionNeededForm from "./components/HousingConnectionNeededForm";
import HQSInspectionServiceRequestForm from "./components/HQSInspectionServiceRequestForm";
import Home from "./pages/Home";
// import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/*<header className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        {/*<p>*/}
                            {/*Edit <code>src/App.js</code> and save to reload.*/}
                        {/*</p>*/}
                        {/*<a*/}
                            {/*className="App-link"*/}
                            {/*href="https://reactjs.org"*/}
                            {/*target="_blank"*/}
                            {/*rel="noopener noreferrer"*/}
                        {/*>*/}
                            {/*Learn React*/}
                        {/*</a>*/}
                    {/*</header>*/}
                    <TopAppBar/>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/tenant" component={HousingConnectionNeededForm}/>
                        <Route path="/inspection" component={HQSInspectionServiceRequestForm}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;