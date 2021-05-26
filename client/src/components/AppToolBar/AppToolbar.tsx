  
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import { indexRoute } from 'Utils/Routes/Routes';
import CategoryDialog from 'components/Content/Categories/CategoryDialog/CategoryDialog';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const AppToolbar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    const mode = FormMode.CREATE; //toDO

    const {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog
    } = useAppToolbar();

    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Grid container alignItems='center'>
                    <NavLink exact to={indexRoute} className={classes.menuItem}>
                        <img id='logo' alt='logo' src='./assets/logo.png' width={79} height={60} />
                        <Typography variant='h5' className={classes.title} id='title'>myLocations</Typography>
                    </NavLink>
                </Grid>

                <Button variant='outlined' color='primary' onClick={handleOpenCategoryDialog}>
                    Add New Category
                </Button>

            </Toolbar>
            
            <CategoryDialog
                open={openCategoryDialog}
                mode={mode}
                handleOpenCategoryDialog={handleOpenCategoryDialog}
                handleCloseCategoryDialog={handleCloseCategoryDialog}
            />
        </AppBar>
    );
};

export default AppToolbar;