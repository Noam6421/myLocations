  
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import { indexRoute } from 'Utils/Routes/Routes';
import StoreStateType from 'redux/storeStateType';
import ActionButton from 'components/ActionButton/ActionButton';
import CategoryDialog from 'components/Content/Categories/CategoryDialog/CategoryDialog';

import useStyles from './AppToolbarStyles';
import useAppToolbar from './useAppToolbar';

const AppToolbar: React.FC<Props> = (props: Props): JSX.Element => {

    const { currentPage } = props;

    const classes = useStyles();

    const [mode, setMode] = useState<FormMode>(FormMode.VIEW);

    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);
    const selectedLocation = useSelector<StoreStateType, string>(state => state.selectedLocation);

    const {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog,
        handleDeleteCategory,
    } = useAppToolbar();

    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Grid
                    container 
                    spacing={2} 
                    direction='row'
                    xs={12} 
                    alignItems='center' 
                    justify='space-between'
                >
                    <Grid item container alignItems='center' xs={4}>
                        <NavLink exact to={indexRoute} className={classes.menuItem}>
                            <img id='logo' alt='logo' src='./assets/logo.png' width={79} height={60} />
                            <Typography variant='h5' className={classes.title} id='title'>myLocations</Typography>
                        </NavLink>
                    </Grid>
                    { currentPage === '/locations' ?
                        <Grid item container alignItems='center' xs={8} justify='flex-end' spacing={1}>
                        { selectedLocation === '' ?
                            <ActionButton 
                                mode={() => setMode(FormMode.CREATE)}
                                action={() => handleOpenCategoryDialog()}
                                text={'Add New Location'}    
                            />  
                            :
                            <>
                                <ActionButton 
                                    mode={() => setMode(FormMode.VIEW)}
                                    action={() => handleOpenCategoryDialog()}
                                    text={'View'}    
                                />
                                <ActionButton 
                                    mode={() => setMode(FormMode.EDIT)}
                                    action={() => handleOpenCategoryDialog()}
                                    text={'Edit'}    
                                />
                                <ActionButton 
                                    action={() => handleDeleteCategory(selectedCategory)}
                                    text={'Delete'}    
                                />
                            </>
                        }
                        </Grid>
                    :
                        <Grid item container alignItems='center' xs={8} justify='flex-end' spacing={1}>
                        { selectedCategory === '' ?
                            <ActionButton 
                                mode={() => setMode(FormMode.CREATE)}
                                action={() => handleOpenCategoryDialog()}
                                text={'Add New Category'}    
                            />  
                            :
                            <>
                                <ActionButton 
                                    mode={() => setMode(FormMode.VIEW)}
                                    action={() => handleOpenCategoryDialog()}
                                    text={'View'}    
                                />
                                <ActionButton 
                                    mode={() => setMode(FormMode.EDIT)}
                                    action={() => handleOpenCategoryDialog()}
                                    text={'Edit'}    
                                />
                                <ActionButton 
                                    action={() => handleDeleteCategory(selectedCategory)}
                                    text={'Delete'}    
                                />
                            </>
                        }
                        </Grid>
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

interface Props {
    currentPage: string;
};

export default AppToolbar;