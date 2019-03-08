import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiPickersUtilsProvider from "material-ui-pickers/MuiPickersUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import App from "./App";


const dest = document.getElementById('root');
const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
});


const theme = createMuiTheme({
    // overrides: {
    //     MuiFormControl: {
    //         root: {
    //             '& p': {
    //                 fontSize: 12,
    //                 border: 0,
    //                 marginTop: 2,
    //                 padding: 0
    //             }
    //         }
    //     },
    //     MuiSelect: {
    //         select: {
    //             paddingBotton: 10
    //         }
    //     }
    // }
});

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

let render = () => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <App/>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        </Provider>,
        dest
    )
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
