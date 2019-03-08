import React from "react";
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import DatePicker from "material-ui-pickers/DatePicker";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import CheckboxGroup from "../components/CheckboxGroup";
import InlineDatePicker from "material-ui-pickers/DatePicker";


export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               fullWidth
               {...input}
               {...custom}
    />
);

export const renderCheckboxGroup = ({input, label, errorText, meta: {touched, error}, ...custom}) => (
    <CheckboxGroup label={label}
                   errorText={touched && error}
                   fullWidth
                   {...input}
                   {...custom}/>
);

export const renderCheckbox = ({input, label}) => (
    <Checkbox label={label}
              checked={input.value ? true : false}
              onCheck={input.onChange}/>
);

export const renderRadioGroup = ({input, label, ...rest}) => (
    <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioButtonGroup {...input} {...rest}
                              valueSelected={input.value}
                              onChange={(event, value) => input.onChange(value)}/>
        </FormControl>
    </div>
);

export const renderDatePicker = ({input, label, selectedDate, meta: {touched, error}, ...custom}) => (
    <DatePicker label={label}
                autoOk
                fullWidth
                format={"MM/dd/yyyy"}
        // placeholder="10/10/2018"
                invalidLabel=""
                invalidDateMessage={touched && error}
        // disableOpenOnEnter
                {...input}
                {...custom}
    />
);

export const renderSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}/>
);

