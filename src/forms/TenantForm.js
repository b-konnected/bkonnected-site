import React from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from '../AsyncValidate'
import { renderTextField } from "./ReduxFormUtils";
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import normalizePhone, {required} from "./ReduxFormValidator";


const validate = values => {
    const errors = {}
    const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
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

const TenantForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
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
                <Field name="firstAndLastName" component={renderTextField} label="First and Last Name"/>
            </div>
            <div>
                <Field name="phone" component={renderTextField} label="Phone" normalize={normalizePhone} validate={[required]}/>
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email"/>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'TenantForm',  // a unique identifier for this form
    validate,
    asyncValidate
})(TenantForm)