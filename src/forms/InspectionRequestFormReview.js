import React from 'react'
import {formValueSelector, reduxForm} from 'redux-form'
import {Paper} from "material-ui";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

let InspectionRequestFormReview = props => {
    const {handleSubmit, handleBack, classes, state} = props;

    const normalizeDate = (date) => {
        if (!date) {
            return 'Unknown';
        }
        return date.toLocaleDateString();
    };

    return (
        <form onSubmit={handleSubmit}>
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h5" component="h3">
                                Service
                            </Typography>
                            <Typography component="p">
                                <div>{selector(state, "requesterName")}</div>
                                <div>{selector(state, "requesterEmail")}</div>
                                <div>{selector(state, "serviceSelection")}</div>
                                <div>{normalizeDate(selector(state, "requestedInspectionDate"))}</div>
                                <div>{selector(state, "requestedInspectionTime")}</div>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h5" component="h3">
                                Landlord
                            </Typography>
                            <Typography component="p">
                                <div>{selector(state, "landlordName")}</div>
                                <div>{selector(state, "landlordPhone")}</div>
                                <div>{selector(state, "landlordEmail")}</div>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h5" component="h3">
                                Property
                            </Typography>
                            <Typography component="p">
                                <div>{selector(state, "propertyAddress")}</div>
                                <div>{selector(state, "propertyCity")}</div>
                                <div>{selector(state, "propertyZipCode")}</div>
                                <div>{selector(state, "propertyCounty")}</div>
                                <div>Built in {selector(state, "propertyYearBuilt")}</div>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h5" component="h3">
                                Tenant
                            </Typography>
                            <Typography component="p">
                                <div>{selector(state, "tenantName")}</div>
                                <div>{selector(state, "tenantPhone")}</div>
                                <div>{selector(state, "tenantEmail")}</div>
                                {selector(state, "childrenUnder6") === 'Yes' && <div>Children Under 6</div>}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    <Button type="button" onClick={handleBack} className={classes.button}>Back</Button>
                    <Button type="submit" variant="contained"
                            color="primary"
                            className={classes.button}>Submit</Button>
                </div>
            </React.Fragment>
        </form>
    )
};

InspectionRequestFormReview = reduxForm({
    form: "InspectionRequest",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(InspectionRequestFormReview)

const selector = formValueSelector('InspectionRequest');

InspectionRequestFormReview = connect(state => {
    return {state}
})(InspectionRequestFormReview)

InspectionRequestFormReview.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
};


export default InspectionRequestFormReview;