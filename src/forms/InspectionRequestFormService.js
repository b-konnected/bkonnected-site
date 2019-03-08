import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderCheckboxGroup, renderDatePicker, renderTextField} from "./ReduxFormUtils";
import {email, required, requiredCheckbox} from "./ReduxFormValidator";
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";

const validate = values => {
    // const errors = {}
    // const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
    // requiredFields.forEach(field => {
    //     if (!values[field]) {
    //         errors[field] = 'Required'
    //     }
    // })
    // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // //     errors.email = 'Invalid email address'
    // // }
    // return errors
};

const InspectionRequestFormService = props => {
    const {handleSubmit, classes} = props;

    return (
        <form onSubmit={handleSubmit}>
            <React.Fragment>
                <Paper>
                    <Typography variant="h5" component="h3">
                        Service
                    </Typography>
                </Paper>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Field name="requesterName" component={renderTextField}
                               label="Name of Agency and or Landlord Requesting Service"
                               validate={[required]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="requesterEmail" component={renderTextField}
                               label="Requester Email Address" validate={[required, email]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="serviceSelection" component={renderCheckboxGroup}
                               options={[
                                   {
                                       label: "Initial HQS Inspection / Lease- Up",
                                       value: "initialHQSInspection_leaseUp"
                                   },
                                   {label: "Annual / Bi-Annual / Special", value: 'annual_biAnnual_special'},
                                   {label: "Project Base Property", value: "projectBaseProperty"},
                                   {label: "Quality Control", value: 'qualityControl'},
                                   {
                                       label: "Owner / Landlord 3rd Party HQS Inspection / 3rd Party Unit Documentation",
                                       value: 'owner_landlord3rdPartyHQSInspection_3rdPartyUnitDocumentation'
                                   }
                               ]}
                               label="Service Selection" validate={[requiredCheckbox]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="requestedInspectionDate" component={renderDatePicker}
                               label="Requested Inspection Date"
                               disablePast validate={[required]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="requestedInspectionTime" component={renderCheckboxGroup}
                               options={[
                                   {label: "9AM - 1PM", value: "9am1pm"},
                                   {label: "1PM - 5PM", value: '1pm5pm'},
                                   {label: "5PM - 8PM", value: "5pm8pm"}
                               ]}
                               label="Requested Inspection Time" validate={[requiredCheckbox]}/>
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    <Button type="submit" variant="contained"
                            color="primary"
                            className={classes.button}>Next</Button>
                </div>
            </React.Fragment>
        </form>
    )
};

InspectionRequestFormService.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};


export default reduxForm({
    form: 'InspectionRequest',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(InspectionRequestFormService)