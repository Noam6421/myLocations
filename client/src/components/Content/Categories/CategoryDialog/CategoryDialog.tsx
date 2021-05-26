import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import StoreStateType from 'redux/storeStateType';

import useCategoryDialog from './useCategoryDialog';

const VIEW_CATEGORY_TITLE = 'Category:';
const CREATE_CATEGORY_TITLE = 'Add Category:';
const EDIT_CATEGORY_TITLE = 'Edit Category:';

const CategoryDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const { open, mode, handleCloseCategoryDialog } = props;
    
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    const {
        categoryName, setCategoryName,
        handleAddCategory, handleEditCategory
    } = useCategoryDialog({ handleCloseCategoryDialog });

    const viewMode = mode === FormMode.VIEW;
    const editMode = mode === FormMode.EDIT;

    return (
        <>
            <Dialog open={open} onClose={handleCloseCategoryDialog}>
                <DialogTitle>
                    { viewMode 
                        ? VIEW_CATEGORY_TITLE 
                        : editMode
                            ? EDIT_CATEGORY_TITLE
                            : CREATE_CATEGORY_TITLE
                    }
                </DialogTitle>
                <DialogContent>
                    { viewMode ? 
                        <Typography>Name: {selectedCategory}</Typography>
                        :
                        <TextField
                            value={categoryName === '' ? selectedCategory : categoryName}
                            onChange={(event) => setCategoryName(event.target.value)}
                            autoFocus
                            margin='dense'
                            fullWidth
                            placeholder={editMode ? 'todo' : 'New category name' }
                        />
                    }
                   
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