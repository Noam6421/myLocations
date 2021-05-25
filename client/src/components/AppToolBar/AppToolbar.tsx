  
import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const AppToolbar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;