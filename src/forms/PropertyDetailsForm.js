import React from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from '../AsyncValidate'
import {renderTextField, renderPhoneField, renderRadioGroup, renderDatePicker} from "./ReduxFormUtils";
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import {RadioButton} from "material-ui/RadioButton";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";


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

const PropertyDetailsForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Paper>
                    <Typography variant="h5" component="h3">
                        Property Owner / Landlord Unit(s) Details
                    </Typography>
                    <Typography component="p">

                    </Typography>
                </Paper>
            </div>
            <div>
                <Field name="primaryContactName" component={renderTextField} label="Primary Contact Name"/>
            </div>
            {/*<div>*/}
                {/*<Field name="phone" component={renderPhoneField} label="Phone #"/>*/}
            {/*</div>*/}
            <div>
                <Field name="email" component={renderTextField} label="Email"/>
            </div>
            <div>
                <Field name="streetAddress" component={renderTextField} label="Street Address"/>
            </div>
            <div>
                <Field name="zipCode" component={renderTextField} label="Zip Code"/>
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">What type of property is this?</FormLabel>
                    <Field name="propertyType" component={renderRadioGroup} label="What type of property is this?">
                        <RadioButton value="singleFamilyDetached" label="Single Family Detached"/>
                        <RadioButton value="semiDetached" label="Semi-Detached (Duplex/Tri-plex)"/>
                        <RadioButton value="gardenWalkUp" label="Garden/Walk Up (3 or less stories)"/>
                        <RadioButton value="elevatorHighRise" label="Elevator / High Rise (+4 Stories)"/>
                        <RadioButton value="manufacturedHome" label="Manufactured Home"/>
                    </Field>
                </FormControl>
            </div>

            If this unit is subsidized, indicate type of subsidy: *
            Does Not Apply To Property
            Section 202
            Home
            Section 221(d)(3)(BMIR)
            Section 236 (Insured or noninsured)
            Section 515 Rural Development
            Other (Describe Other Subsidy, Including Any State or Local Subsidy)

            Is this a first floor unit? (Walk-up) *
            Yes
            No

            Is this an ADA Accessible Unit (Wheel Chair Accessible) *
            Yes
            No
            Maybe

            <div>
                <Field name="yearBuilt" component={renderDatePicker} label="Year unit was built"
                       views={["year"]}
                       disableFuture
                />
            </div>

            Unit Size (How Many Bedrooms) ? *
            Studio
            1 Bedroom
            2 Bedroom
            3 Bedroom
            4 Bedroom
            5 Bedroom
            6 Bedroom

            When is property ready for Inspection/Showing? *
            MM/DD/YYYY

            Requested Beginning Date of Lease *
            MM/DD/YYYY

            Requested Monthly Rental Amount? (Maybe Negotiable) *
            Your answer

            Requested Deposit Amount? (Maybe Negotiable) *
            Your answer

            What Utilities are in the Renters Name? *
            This question requires one response per row

            Electric	Natural Gas	Bottle Gas	Oil	Coal/ Other
            All Utilities Are Included In Rent
            Heating
            Cooking
            Water Heating
            All Electric
            Water
            Sewer
            Trash Collection
            Air Conditioning
            Refrigerator
            Range/Micrcowave
            Other (specify)
            All Utilities Are Included In Rent
            Heating
            Cooking
            Water Heating
            All Electric
            Water
            Sewer
            Trash Collection
            Air Conditioning
            Refrigerator
            Range/Micrcowave
            Other (specify)

            Is this property near public transportation? *
            Yes
            No
            I Do Not Know

            Amenities on property *
            Onsite Parking
            Street Parking
            Laundry in unit
            On-site Community Laundry Room
            Other

            Will property create access to those utilizing rental assist programs? *
            Yes
            No
            Maybe

            Does an individual with a past history of a mutual recession/broken lease have access to this property? *
            Yes
            No
            Case-by-Case

            Can a family/individual with an eviction access this property? *
            Yes
            No
            Case-by-Case

            Can someone with a misdemeanor rent this property? *
            Yes
            No
            Case-by-Case

            Can someone with a felony rent this property? *
            Yes
            No
            Case-by-Case

            Would owner be willing to do a short term lease 6 months to 'test a renter' ? *
            Yes
            No
            Maybe

            Upload Application or any Tenant Screening Materials
            ADD FILE

            Upload Lease for property *
            ADD FILE

            Please check the box below to indicate B-Konnected can store your entry and use entry for future research on rental properties and renters in Colorado (if you check "no" we will still initiate service and remove your data after service is completed)
            Yes, I consent
            No, Thank You

            <div>
                <button
                    type="submit"
                    disabled={pristine || submitting
                    }>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'PropertyDetailsForm',  // a unique identifier for this form
    validate,
    asyncValidate
})(PropertyDetailsForm)