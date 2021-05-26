import React, { useState } from 'react';

import { createCategory } from 'redux/Categories/categoriesActionCreators';

const useCategoryDialog = (props: Props) :  useAppToolbarOutcome => {

    const { handleCloseCategoryDialog } = props;
    const [categoryName, setCategoryName] = useState<string>('');

    const handleAddCategory = () => {
        createCategory({name: categoryName});
        handleCloseCategoryDialog();
    };

    const handleEditCategory = () => {
        console.log('edit cat');
    };

    return {
        categoryName,
        setCategoryName,
        handleAddCategory,
        handleEditCategory
    }
};

export interface useAppToolbarOutcome {
    categoryName: string;
    setCategoryName: React.Dispatch<React.SetStateAction<string>>;
    handleAddCategory: () => void;
    handleEditCategory: () => void;
};

interface Props {
    handleCloseCategoryDialog: () => void;
};

export default useCategoryDialog;