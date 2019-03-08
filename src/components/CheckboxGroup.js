import * as React from 'react';
import PropTypes from 'prop-types';
import {Field} from "redux-form";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Checkbox} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class CheckboxGroup extends React.Component {

    item = ({input, label}) => (
            <FormControlLabel
                control={<Checkbox {...input} />}
                label={label}/>
        // <div>
        //     <label>
        //         <span><input type="checkbox" {...input}/></span>
        //         <span>{label}</span>
        //     </label>
        // </div>
    );

    handleChange = ({input, input: {onChange, onBlur}, value}) => (event) => {
        const inputValue = input.value;
        const arr = [...inputValue];
        if (event.target.checked) {
            arr.push(value);
        } else {
            arr.splice(arr.indexOf(value), 1);
        }
        onBlur(arr);
        return onChange(arr);
    };

    field = ({input, label, errorText, meta, options}) => {

        const {name, onFocus} = input;
        const {component = this.item} = this.props;
        const inputValue = input.value;

        const checkboxes = options.map((option, index) => {
            const {label, value} = option;
            const key = `checkbox-${index}`;

            return React.createElement(component, {
                input: {
                    name: `${name}[${index}]`,
                    checked: inputValue.includes(value),
                    onChange: this.handleChange({input, value}),
                    value, onFocus
                },
                meta, label, option, options, key
            });
        });

        return (
            <div>
                <FormControl error={errorText} component="fieldset">
                    <FormLabel component="legend">{label}</FormLabel>
                    {checkboxes}
                    {errorText && <FormHelperText>{errorText}</FormHelperText>}
                </FormControl>
            </div>
        );

    };

    render() {
        return <Field {...this.props} component={this.field}/>;
    }
}

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.node.isRequired
    })).isRequired,
    component: PropTypes.func,
};