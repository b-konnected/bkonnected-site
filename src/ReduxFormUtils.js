import React from "react";
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import DatePicker from "material-ui-pickers/DatePicker";
import PhoneInput from "mui-phone-input";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

export const renderCheckbox = ({input, label}) => (
    <Checkbox label={label}
              checked={input.value ? true : false}
              onCheck={input.onChange}/>
);

export const renderRadioGroup = ({input, ...rest}) => (
    <RadioButtonGroup {...input} {...rest}
                      valueSelected={input.value}
                      onChange={(event, value) => input.onChange(value)}/>
);

export const renderDatePicker = ({input, label, meta: {touched, error}, ...custom}) => (
    <DatePicker label={label}
                errorText={touched && error}
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

export const renderPhoneField = ({input, label, meta: {touched, error}, ...custom}) => (
    <PhoneInput hintText={label}
                label={label}
                errorText={touched && error}
                {...input}
                {...custom}
    />
);