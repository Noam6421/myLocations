import React, { useState } from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';

import useCategoryDialog from './useCategoryDialog';

const CREATE_CATEGORY_TITLE = 'Add New Category';
const EDIT_CATEGORY_TITLE = 'Edit Category';

const CategoryDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const {
        open,
        mode,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog
    } = props;

    const {
        categoryName,
        setCategoryName,
        handleAddCategory,
        handleEditCategory
    } = useCategoryDialog({ handleCloseCategoryDialog });

    const editMode = mode === FormMode.EDIT;

    return (
        <>
            <Dialog open={open} onClose={handleCloseCategoryDialog}>
                <DialogTitle>
                    { editMode 
                        ? EDIT_CATEGORY_TITLE
                        : CREATE_CATEGORY_TITLE
                    }
                </DialogTitle>
                <DialogContent>
                    <TextField
                        value={categoryName}
                        onChange={(event) => setCategoryName(event.target.value)}
                        autoFocus
                        margin='dense'
                        fullWidth
                        placeholder={editMode ? 'todo' : 'New category name' }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCategoryDialog} color='primary'>
                        Cancel
                    </Button>
                    <Button 
                        onClick={editMode ? handleEditCategory : handleAddCategory} 
                        color='primary'
                    >
                        { editMode ? 'Save' : 'Add' }
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

interface Props {
    open: boolean;
    mode: FormMode;
    handleOpenCategoryDialog: () => void;
    handleCloseCategoryDialog: () => void;
};

export default CategoryDialog;