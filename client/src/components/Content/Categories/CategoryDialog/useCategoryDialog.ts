import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import StoreStateType from 'redux/storeStateType';
import { createCategory, editCategory } from 'redux/Categories/categoriesActionCreators';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';

const useCategoryDialog = (props: Props) :  useAppToolbarOutcome => {
    
    const { handleCloseCategoryDialog } = props;
    
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    const [categoryName, setCategoryName] = useState<string>('');

    const handleAddCategory = () => {
        createCategory({name: categoryName});
        handleCloseCategoryDialog();
        setCategoryName('');
    };

    const handleEditCategory = () => {
        editCategory({name: selectedCategory}, categoryName);
        handleCloseCategoryDialog();
        setSelectedCategory(categoryName);
        setCategoryName('');
    };

    return {
        categoryName,
        setCategoryName,
        handleAddCategory,
        handleEditCategory
    };
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