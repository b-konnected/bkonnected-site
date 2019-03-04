import React from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from './AsyncValidate'
import CheckboxGroup from "./CheckboxGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {renderTextField, renderDatePicker, renderPhoneField, renderRadioGroup} from "./ReduxFormUtils";
import {RadioButton} from 'material-ui/RadioButton'
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";


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

let serviceSelectionOptionsList = [
    {label: "Initial HQS Inspection / Lease- Up", value: "initialHQSInspection_leaseUp"},
    {label: "Annual / Bi-Annual / Special", value: 'annual_biAnnual_special'},
    {label: "Project Base Property", value: "projectBaseProperty"},
    {label: "Quality Control", value: 'qualityControl'},
    {
        label: "Owner / Landlord 3rd Party HQS Inspection/ 3rd Party Unit Documentation",
        value: 'owner_landlord3rdPartyHQSInspection_3rdPartyUnitDocumentation'
    }
]

let timeForInspectionOptionsList = [
    {label: "9AM - 1PM", value: "9am1pm"},
    {label: "1PM - 5PM", value: '1pm5pm'},
    {label: "5PM - 8PM", value: "5pm8pm"}
]


const HQSInspectionServiceRequestForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Paper>
                    <Typography variant="h5" component="h3">
                        HQS Inspection Service Request
                    </Typography>
                    <Typography component="p">
                        B-Konnected offers the required Housing and Urban Development (HUD) Housing Quality
                        Standard Inspection (HQS Inspection). Our Housing Konnectors are equipped to perform
                        single housing inspections and/or entire project based units for agencies. We
                        attempt to humanize and standardize the HQS Inspection process between all involved
                        parties. All requests will be met with a follow-up communication for clarifying and
                        or confirming information. The HUD 52580 form will be sent to requested party after
                        inspection is completed. Agencies and owners can request single services or reach
                        out to bkonnectedteam@bkonnected.org for contractional work agreements. All 24 hour
                        failed inspections will be scheduled by Housing Konnectors with either owner or
                        tenant and will notify agency.
                    </Typography>
                </Paper>
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email Address"/>
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Service Selection</FormLabel>
                    <Field name="serviceSelection" component={CheckboxGroup} options={serviceSelectionOptionsList}
                           label="Service Selection"/>
                </FormControl>
            </div>
            <div>
                <Field name="requestedDateOfHQSInspection" component={renderDatePicker}
                       label="Requested Date of HQS Inspection"
                       disablePast
                       invalidLabel=""
                       invalidDateMessage=""
                />
                {/*onlyCalendar*/}
                {/*label={label}*/}
                {/*errorText={}*/}
                {/*value={this.state.selectedDate}*/}
                {/*disablePast*/}
                {/*onChange={this.handleChange('selectedDate')}*/}
                {/*animateYearScrolling*/}
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Time for Inspection (inspection will be completed
                        within a
                        4 hour time frame)</FormLabel>
                    <Field name="timeForInspection" component={CheckboxGroup} options={timeForInspectionOptionsList}
                           label="Time for Inspection (inspection will be completed
                        within a
                        4 hour time frame)"/>
                </FormControl>
            </div>
            <div>
                <Field name="agency" component={renderTextField}
                       label="Name Agency and or Landlord Requesting Service"/>
            </div>
            <div>
                <Field name="tenantName" component={renderTextField} label="Tenant Name"/>
            </div>
            <div>
                <Field name="tenantPhone" component={renderPhoneField} label="Tenant Phone"/>
            </div>
            <div>
                <Field name="tenantEmail" component={renderTextField} label="Tenant Email"/>
            </div>
            <div>
                <Field name="propertyAddress" component={renderTextField} label="Property Street Address, Unit#"/>
            </div>
            <div>
                <Field name="propertyCity" component={renderTextField} label="Property City"/>
            </div>
            <div>
                <Field name="propertyZipCode" component={renderTextField} label="Property Zip Code"/>
            </div>
            <div>
                <Field name="propertyCounty" component={renderTextField} label="Property County"/>
            </div>
            <div>
                <Field name="yearBuilt" component={renderDatePicker} label="Year unit was built"
                       views={["year"]}
                       disableFuture
                />
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Children Under Six</FormLabel>
                    <Field name="childrenUnder6" component={renderRadioGroup} label="Children Under Six">
                        <RadioButton value="Yes" label="Yes"/>
                        <RadioButton value="No" label="No"/>
                    </Field>
                </FormControl>
            </div>
            <div>
                <Field name="landlordPhone" component={renderPhoneField} label="Landlord Phone"/>
            </div>
            <div>
                <Field name="landlordEmail" component={renderTextField} label="Landlord Email"/>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'HQSInspectionServiceRequestForm',  // a unique identifier for this form
    validate,
    asyncValidate
})(HQSInspectionServiceRequestForm)