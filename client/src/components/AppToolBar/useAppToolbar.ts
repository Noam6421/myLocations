import React, { useState } from 'react';

import { deleteCategory } from 'redux/Categories/categoriesActionCreators';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';

const useAppToolbar = () :  useAppToolbarOutcome => {

    const [openCategoryDialog, setOpenCategoryDialog] = useState<boolean>(false);

    const handleOpenCategoryDialog = () => {
        setOpenCategoryDialog(true);
    };

    const handleCloseCategoryDialog = () => {
        setOpenCategoryDialog(false);
    };

    const handleDeleteCategory = (selectedCategory: string) => {
        deleteCategory({name: selectedCategory});
        setSelectedCategory('');
    };

    return {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog,
        handleDeleteCategory
    };
};

export interface useAppToolbarOutcome {
    openCategoryDialog: boolean;
    handleOpenCategoryDialog: () => void;
    handleCloseCategoryDialog: () => void;
    handleDeleteCategory: (selectedCategory: string) => void;
};

export default useAppToolbar;