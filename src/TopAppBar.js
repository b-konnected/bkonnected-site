import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";

const styles = {
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
};

function TopAppBar(props) {
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
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}><NavLink to="/tenant">Tenant</NavLink></MenuItem>
                        <MenuItem onClick={handleClose}>Landlord</MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to="/inspection">Inspection Service Request</NavLink></MenuItem>
                    </Menu>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <NavLink to="/">B-Konnected</NavLink>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);