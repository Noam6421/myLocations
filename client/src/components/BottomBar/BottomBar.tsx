  
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Divider, Grid, Toolbar } from '@material-ui/core';

import theme from 'styles/theme';
import { indexRoute, locationsRoute } from 'Utils/Routes/Routes';

import useStyles from './BottomBarStyles';

const BottomBar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <AppBar className={classes.bottomBar} position='fixed'>
            <Toolbar>
                <Grid
                    container 
                    direction='row'
                    xs={12} 
                    alignItems='center' 
                    wrap='nowrap'
                >
                    <Grid item alignItems='center' xs={6} className={classes.item}>
                        <NavLink exact to={indexRoute} className={classes.navLink} activeStyle={{ color: theme.palette.primary.dark }}>
                            Categories
                        </NavLink>
                    </Grid>
                    <Divider orientation='vertical' flexItem/>
                    <Grid item alignItems='center' xs={6} className={classes.item}>
                        <NavLink exact to={locationsRoute} className={classes.navLink} activeStyle={{ color: theme.palette.primary.dark }}>
                            Locations
                        </NavLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default BottomBar;