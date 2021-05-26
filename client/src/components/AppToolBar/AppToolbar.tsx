  
import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { indexRoute } from 'Utils/Routes/Routes';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const AppToolbar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Grid container alignItems='center'>
                    <NavLink exact to={indexRoute} className={classes.menuItem}>
                        <img id='logo' alt='logo' src='./assets/logo.png' width={79} height={60} />
                        <Typography variant='h5' className={classes.title} id='title'>myLocations</Typography>
                    </NavLink>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;