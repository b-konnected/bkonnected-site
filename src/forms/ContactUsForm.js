import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from '../AsyncValidate'
import {renderTextField} from "./ReduxFormUtils";
import {withStyles} from '@material-ui/core/styles';
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import normalizePhone, {required} from "./ReduxFormValidator";
import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

const validate = values => {
    const errors = {}
    // const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
    // requiredFields.forEach(field => {
    //     if (!values[field]) {
    //         errors[field] = 'Required'
    //     }
    // })
    // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    // }
    return errors
}

class ContactUsForm extends Component {
    render() {
        const {handleSubmit, pristine, reset, submitting, classes} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <React.Fragment>
                    <div>
                        <Paper>
                            <Typography variant="h5" component="h3">
                                Housing Connection Needed
                            </Typography>
                            <Typography component="p">
                                B-Konnected focuses on streamlining services, housing placement and housing
                                navigation. We attempt to connect you with landlords that will meet with your
                                specific housing needs. The form below asks specific questions that will attempt to
                                match you with units in our system.
                            </Typography>
                            <Typography component="p">
                                All entries are time stamped and will be addressed accordingly. If you need
                                assistance in filling out this form please e-mail bkonnectedteam@bkonnected.org
                            </Typography>
                            <Typography component="p">
                                Please note: B-Konnected is not responsible for any landlord rental screenings or
                                their application processes. B-Konnected is an equal housing provider and HUD
                                affiliate partner. Property of B-Konnected, LLC.
                            </Typography>
                        </Paper>
                    </div>
                    <div>
                        <Field name="firstAndLastName" component={renderTextField} label="First and Last Name*"
                               validate={[required]}/>

                        <Field name="phone" component={renderTextField} label="Phone Number*"
                               normalize={normalizePhone} validate={[required]}/>

                        <Field name="email" component={renderTextField} label="Email*" validate={[required]}/>
                    </div>
                    <div className={classes.buttons}>
                        <Button type="submit" variant="contained" className={classes.button}
                                disabled={pristine || submitting}>Submit</Button>
                        <Button type="button" variant="contained" color="primary" className={classes.button}
                                disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
                    </div>

                </React.Fragment>
            </form>
        )
    }
};

ContactUsForm.propTypes = {
    // handleSubmit: PropTypes.func.isRequired,
    // handleBack: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};


export default reduxForm({
    form: 'ContactUsForm',  // a unique identifier for this form
    validate,
    asyncValidate
})(withStyles(styles)(ContactUsForm))