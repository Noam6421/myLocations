  
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, BottomNavigation, BottomNavigationAction, Grid, Toolbar, Typography } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import { indexRoute } from 'Utils/Routes/Routes';
import StoreStateType from 'redux/storeStateType';
import ActionButton from 'components/ActionButton/ActionButton';
import CategoryDialog from 'components/Content/Categories/CategoryDialog/CategoryDialog';

import useStyles from './BottomBarStyles';

const BottomBar: React.FC = (): JSX.Element => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <NavLink exact to={indexRoute} className={classes.menuItem}>
                <BottomNavigationAction label='Categories'
                //  icon={<RestoreIcon />} 
                />
            </NavLink>
            <NavLink exact to={indexRoute} className={classes.menuItem}>
                <BottomNavigationAction label='Locations'
                // icon={<FavoriteIcon />} 
                />
            </NavLink>
        </BottomNavigation>
    );
};

export default BottomBar;