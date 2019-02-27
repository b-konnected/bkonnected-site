import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PhoneField from "./component/PhoneField";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class HousingConnectionNeededForm extends React.Component {
    state = {
        name: ' ',
        email: ' '
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
            <form className={classes.container} noValidate autoComplete="off">
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Housing Connection Needed
                    </Typography>
                    <Typography component="p">
                        B-Konnected  focuses on streamlining services, housing placement and housing navigation.  We attempt to connect you with landlords that will meet with your specific housing needs.  The form below asks specific questions that will attempt to match you with units in our system.
                    </Typography>
                    <Typography component="p">
                        All entries are time stamped and will be addressed accordingly. If you need assistance in filling out this form please e-mail bkonnectedteam@bkonnected.org
                    </Typography>
                    <Typography component="p">
                        Please note:  B-Konnected is not responsible for any landlord rental screenings or their application processes. B-Konnected is an equal housing provider and HUD affiliate partner. Property of B-Konnected, LLC.
                    </Typography>
                </Paper>

                <TextField
                    required
                    id="name"
                    label="First and Last Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />

                <PhoneField/>

                <TextField
                    required
                    id="email"
                    label="Email"
                    value={this.state.email}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    required
                    id="email verify"
                    label="Verify Email"
                    value={this.state.email}
                    className={classes.textField}
                    margin="normal"
                />

            </form>
            </div>
        );
    }
}

HousingConnectionNeededForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HousingConnectionNeededForm);
