import React, { useState } from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';

const CREATE_CATEGORY_TITLE = 'Add New Category';
const EDIT_CATEGORY_TITLE = 'Edit Category';

const CategoryDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const {
        open,
        mode,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog
    } = props;

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
                        autoFocus
                        margin='dense'
                        fullWidth
                        placeholder={editMode ? 'todo' : 'category name' }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCategoryDialog} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={handleOpenCategoryDialog} color='primary'>
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