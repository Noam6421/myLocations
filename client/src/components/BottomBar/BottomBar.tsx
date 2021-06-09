  
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Divider, Grid, Toolbar } from '@material-ui/core';

import theme from 'styles/theme';
import { indexRoute, locationsRoute } from 'Utils/Routes/Routes';

import useStyles from './BottomBarStyles';

const BottomBar: React.FC<Props> = (props: Props): JSX.Element => {

    const { setCurrentPage } = props;

    const classes = useStyles();

    return (
        <AppBar className={classes.bottomBar} position='fixed'>
            <Toolbar>
                <Grid
                    container 
                    direction='row'
                    alignItems='center' 
                    wrap='nowrap'
                >
                    <Grid item xs={6} className={classes.item}>
                        <NavLink 
                            exact 
                            to={indexRoute} 
                            onClick={() => setCurrentPage(indexRoute)} 
                            className={classes.navLink} 
                            activeStyle={{ color: theme.palette.primary.dark }}
                        >
                            Categories
                        </NavLink>
                    </Grid>
                    <Divider orientation='vertical' flexItem/>
                    <Grid item xs={6} className={classes.item}>
                        <NavLink 
                            exact 
                            to={locationsRoute} 
                            onClick={() => setCurrentPage(locationsRoute)} 
                            className={classes.navLink} 
                            activeStyle={{ color: theme.palette.primary.dark }}
                        >
                            Locations
                        </NavLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

interface Props {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};

export default BottomBar;