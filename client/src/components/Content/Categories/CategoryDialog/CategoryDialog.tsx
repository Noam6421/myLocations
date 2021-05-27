import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import StoreStateType from 'redux/storeStateType';

import useCategoryDialog from './useCategoryDialog';

const VIEW_CATEGORY_TITLE = 'Category:';
const CREATE_CATEGORY_TITLE = 'Add Category:';
const EDIT_CATEGORY_TITLE = 'Edit Category:';
const ERROR_MESSAGE = 'This category already exists, please change name';

const CategoryDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const { open, mode, handleCloseCategoryDialog } = props;
    
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    const {
        categoryName, setCategoryName,
        handleAddCategory, handleEditCategory,
        error
    } = useCategoryDialog({ handleCloseCategoryDialog });

    const viewMode = mode === FormMode.VIEW;
    const editMode = mode === FormMode.EDIT;

    return (
        <>
            <Dialog open={open} onClose={handleCloseCategoryDialog}>
                <DialogTitle color='primary'>
                    { viewMode 
                        ? VIEW_CATEGORY_TITLE 
                        : editMode
                            ? EDIT_CATEGORY_TITLE
                            : CREATE_CATEGORY_TITLE
                    }
                </DialogTitle>
                <DialogContent>
                    <Grid container direction='row' xs={12} alignItems='center'>
                        <Grid item xs={3}>
                            <Typography>Name:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                value={categoryName === '' ? selectedCategory : categoryName}
                                onChange={(event) => setCategoryName(event.target.value)}
                                autoFocus
                                margin='dense'
                                fullWidth
                                disabled={viewMode}
                                placeholder={editMode ? 'todo' : 'New category name' }
                                error={error}
                            />
                        </Grid>
                    </Grid>
                    {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCategoryDialog} color='primary'>
                        Cancel
                    </Button>
                    {!viewMode &&
                        <Button 
                            onClick={editMode ? handleEditCategory : handleAddCategory} 
                            color='primary'
                        >
                            { editMode ? 'Save' : 'Add' }
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </>
    );
}

interface Props {
    open: boolean;
    mode: FormMode;
    handleCloseCategoryDialog: () => void;
};

export default CategoryDialog;