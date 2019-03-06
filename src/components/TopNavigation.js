import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    headline: {
        fontSize: 20,
        paddingTop: 16,
        marginBottom: 12,
        // fontWeight: 400,
        color: '#FFF'
    },
    navLink: {
        color: 'white',
        padding: 10,
        textDecoration: 'none'
    },
    activeNavLink: {
        color: 'purple',
        padding: 10,
        textDecoration: 'none'
    }
});



function TopNavigation(props) {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu"*/}
                                {/*aria-owns={anchorEl ? 'simple-menu' : undefined}*/}
                                {/*aria-haspopup="true"*/}
                                {/*onClick={handleClick}>*/}
                        {/*<MenuIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>*/}
                        {/*<MenuItem onClick={handleClose}><NavLink to="/tenant">Tenant</NavLink></MenuItem>*/}
                        {/*<MenuItem onClick={handleClose}>Landlord</MenuItem>*/}
                        {/*<MenuItem onClick={handleClose}><NavLink to="/inspection">Inspection Service Request</NavLink></MenuItem>*/}
                    {/*</Menu>*/}
                    <Typography variant="h6" color="white" className={classes.grow}>
                        <NavLink className={classes.navLink} activeStyle={{ color: 'rgb(211,211,211)', borderColor: 'rgb(211,211,211)', borderStyle: 'none none solid none', borderWidth: '1px'}} to="/home">B-Konnected</NavLink>
                        <NavLink className={classes.navLink} activeStyle={{ color: 'rgb(211,211,211)', borderColor: 'rgb(211,211,211)', borderStyle: 'none none solid none', borderWidth: '1px' }} to="/about">About Us</NavLink>
                        <NavLink className={classes.navLink} activeStyle={{ color: 'rgb(211,211,211)', borderColor: 'rgb(211,211,211)', borderStyle: 'none none solid none', borderWidth: '1px' }} to="/contact">Contact Us</NavLink>
                        <NavLink className={classes.navLink} activeStyle={{ color: 'rgb(211,211,211)', borderColor: 'rgb(211,211,211)', borderStyle: 'none none solid none', borderWidth: '1px' }} to="/inspection">HQSInspectionServiceRequestForm</NavLink>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

TopNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavigation);