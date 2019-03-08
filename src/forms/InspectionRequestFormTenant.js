import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderRadioGroup, renderTextField} from "./ReduxFormUtils";
import {RadioButton} from 'material-ui/RadioButton'
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {email, required} from "./ReduxFormValidator";
import normalizePhone from "./ReduxFormValidator";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";


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
};

const InspectionRequestFormTenant = props => {
    const {handleSubmit, handleBack, classes} = props
    return (
        <form onSubmit={handleSubmit}>
            <React.Fragment>
                <Paper>
                    <Typography variant="h5" component="h3">
                        Tenant
                    </Typography>
                </Paper>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Field name="tenantName" component={renderTextField} label="Name" validate={[required]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="tenantPhone" component={renderTextField} label="Phone" normalize={normalizePhone}
                               validate={[required]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="tenantEmail" component={renderTextField} label="Email"
                               validate={[required, email]}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="childrenUnder6" component={renderRadioGroup} label="Children Under Six">
                            <RadioButton value="Yes" label="Yes"/>
                            <RadioButton value="No" label="No"/>
                        </Field>
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    <Button type="button" onClick={handleBack} className={classes.button}>Back</Button>
                    <Button type="submit" variant="contained"
                            color="primary"
                            className={classes.button}>Review</Button>
                </div>
            </React.Fragment>
        </form>
    )
};

InspectionRequestFormTenant.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default reduxForm({
    form: 'InspectionRequest',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(InspectionRequestFormTenant)