import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import InspectionRequestFormService from "./InspectionRequestFormService";
import InspectionRequestFormLandlord from "./InspectionRequestFormLandlord";
import InspectionRequestFormProperty from "./InspectionRequestFormProperty";
import InspectionRequestFormTenant from "./InspectionRequestFormTenant";
import InspectionRequestFormReview from "./InspectionRequestFormReview";
import * as PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

const steps = ['Service', 'Landlord', 'Property', 'Tenant', 'Review'];

const showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {
            // simulate server latency
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            resolve()
        }, 500)
    });

class InspectionRequestForm extends Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            activeStep: 0,
        }
    }

    handleNext() {
        this.setState({activeStep: this.state.activeStep + 1})
    }

    handleBack() {
        this.setState({activeStep: this.state.activeStep - 1})
    }

    render() {
        const {classes, onSubmit} = this.props;
        const {activeStep} = this.state;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Inspection Service Request
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === 0 &&
                            <InspectionRequestFormService onSubmit={this.handleNext} classes={classes} />}
                            {activeStep === 1 &&
                            <InspectionRequestFormLandlord handleBack={this.handleBack} onSubmit={this.handleNext}
                                                           classes={classes}/>}
                            {activeStep === 2 &&
                            <InspectionRequestFormProperty handleBack={this.handleBack} onSubmit={this.handleNext}
                                                           classes={classes}/>}
                            {activeStep === 3 &&
                            <InspectionRequestFormTenant handleBack={this.handleBack} onSubmit={this.handleNext}
                                                         classes={classes}/>}
                            {activeStep === 4 &&
                            <InspectionRequestFormReview handleBack={this.handleBack} onSubmit={showResults}
                                                         classes={classes}/>}
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

InspectionRequestForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InspectionRequestForm);