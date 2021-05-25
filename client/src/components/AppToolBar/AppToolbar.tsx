  
import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { NavLink, NavLinkProps , useHistory } from 'react-router-dom';

import { indexRoute } from 'Utils/Routes/Routes';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const StatePersistentNavLink = (props: NavLinkProps) => {
    const classes = useStyles();
    const history = useHistory();

    const handleNavClick: NavLinkProps['onClick'] = (event) => {
        event.preventDefault(); // prevent state reset on reroute
        history.push(props.to as string, history.location.state);
    };

    return (
        <NavLink {...props} location={history.location}
            onClick={handleNavClick}
            className={classes.menuItem}
        >
            {props.children}
        </NavLink>
    );
};

const AppToolbar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Grid container alignItems='center'>
                    <StatePersistentNavLink exact to={indexRoute} >
                        <img id='logo' alt='logo' src='./assets/logo.png' width={79} height={60} />
                        <Typography variant='h5' className={classes.title} id='title'>myLocations</Typography>
                    </StatePersistentNavLink>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;