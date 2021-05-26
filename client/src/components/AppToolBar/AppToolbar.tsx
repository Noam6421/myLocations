  
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import { indexRoute } from 'Utils/Routes/Routes';
import StoreStateType from 'redux/storeStateType';
import CategoryDialog from 'components/Content/Categories/CategoryDialog/CategoryDialog';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const AppToolbar: React.FC = (): JSX.Element => {

    const classes = useStyles();

    const [mode, setMode] = useState<FormMode>(FormMode.VIEW);

    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    const {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog,
        handleDeleteCategory
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
                <Grid container alignItems='center'>
                { selectedCategory === '' ?
                    <Button 
                        variant='outlined' 
                        color='primary' 
                        onClick={() => {
                            setMode(FormMode.CREATE);
                            handleOpenCategoryDialog();
                        }}
                    >
                        Add New Category
                    </Button>
                    :
                    <>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={() => {
                                setMode(FormMode.VIEW);
                                handleOpenCategoryDialog();
                            } }
                        >
                            View
                        </Button><Button
                            variant='outlined'
                            color='primary'
                            onClick={() => {
                                setMode(FormMode.EDIT);
                                handleOpenCategoryDialog();
                            } }
                        >
                                Edit
                            </Button><Button variant='outlined' color='primary' onClick={() => handleDeleteCategory(selectedCategory)}>
                                Delete
                            </Button>
                    </>
                }
                </Grid>

            </Toolbar>
            
            <CategoryDialog
                open={openCategoryDialog}
                mode={mode}
                handleCloseCategoryDialog={handleCloseCategoryDialog}
            />
        </AppBar>
    );
};

export default AppToolbar;