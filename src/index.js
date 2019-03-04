import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HQSInspectionServiceRequestForm from "./HQSInspectionServiceRequestForm";
import {Provider} from "react-redux";
import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiPickersUtilsProvider from "material-ui-pickers/MuiPickersUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import HousingConnectionNeededForm from "./HousingConnectionNeededForm";
import App from "./App";



const dest = document.getElementById('root')
const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
})

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                '& p': {
                    fontSize: 12,
                    border: 0,
                    marginTop: 2,
                    padding: 0
                }
            }
        },
        MuiSelect: {
            select: {
                paddingBotton: 10
            }
        }
    }
})

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer)

const showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {
            // simulate server latency
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
            resolve()
        }, 500)
    })

let render = () => {
    ReactDOM.hydrate(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <App/>
                        {/*<HQSInspectionServiceRequestForm onSubmit={showResults}/>*/}
                        {/*<HousingConnectionNeededForm onSubmit={showResults}/>*/}
                    </MuiPickersUtilsProvider>
                </MuiThemeProvider>
            </Provider>,
        dest
    )
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
