import React, {Component} from "react";
import './App.css';

import {HashRouter, Route} from "react-router-dom";
import TenantForm from "./forms/TenantForm";
import InspectionRequestForm from "./forms/InspectionRequestForm";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./forms/ContactUsForm";

// import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopNavigation/>
                    <div className="content" style={{marginLeft: '30px', marginTop: '15px', marginRight: '30px'}}>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/tenant" component={TenantForm}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/contact" component={ContactUs}/>
                        <Route path="/inspection" component={InspectionRequestForm}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;