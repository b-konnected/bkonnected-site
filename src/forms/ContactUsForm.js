import React from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from '../AsyncValidate'
import {renderTextField} from "./ReduxFormUtils";
import {withStyles} from '@material-ui/core/styles';
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import normalizePhone, {required} from "./ReduxFormValidator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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

const ContactUsForm = props => {
    const {handleSubmit, pristine, reset, submitting, classes} = props
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
                <Grid container className={classes.root} spacing={24}>
                    <Grid item>
                        <Grid container spacing={8}>
                            <Field name="firstAndLastName" component={renderTextField} label="First and Last Name*"
                                   validate={[required]}/>

                            <Field name="phone" component={renderTextField} label="Phone Number*"
                                   normalize={normalizePhone} validate={[required]}/>

                            <Field name="email" component={renderTextField} label="Email*" validate={[required]}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container justify={"left"} spacing={8}>
                            <Grid item>
                                <Button type="submit" variant="contained" color="primary"
                                        disabled={pristine || submitting}>Submit</Button>
                            </Grid>
                            <Grid item>
                                <Button type="button" variant="contained" color="primary"
                                        disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </React.Fragment>
        </form>
    )
}

export default reduxForm({
    form: 'ContactUsForm',  // a unique identifier for this form
    validate,
    asyncValidate
})(withStyles(styles)(ContactUsForm))