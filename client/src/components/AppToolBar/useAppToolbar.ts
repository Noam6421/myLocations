import React, { useState } from 'react';

const useAppToolbar = () :  useAppToolbarOutcome => {

    const [openCategoryDialog, setOpenCategoryDialog] = useState<boolean>(false);

    const handleOpenCategoryDialog = () => {
        setOpenCategoryDialog(true);
    };

    const handleCloseCategoryDialog = () => {
        setOpenCategoryDialog(false);
    };

    return {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog
    }
};

export interface useAppToolbarOutcome {
    openCategoryDialog: boolean;
    handleOpenCategoryDialog: () => void;
    handleCloseCategoryDialog: () => void;
};

export default useAppToolbar;