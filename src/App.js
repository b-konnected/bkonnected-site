import React, {Component} from "react";
import './App.css';

import {HashRouter, Route} from "react-router-dom";
import HousingConnectionNeededForm from "./components/HousingConnectionNeededForm";
import HQSInspectionServiceRequestForm from "./components/HQSInspectionServiceRequestForm";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

// import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopNavigation/>
                    <div className="content" style={{marginLeft: '30px', marginRight: '-30px'}}>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/tenant" component={HousingConnectionNeededForm}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/contact" component={ContactUs}/>
                        <Route path="/inspection" component={HQSInspectionServiceRequestForm}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;