import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import Category from 'models/Category';
import StoreStateType from 'redux/storeStateType';
import { createCategory, editCategory } from 'redux/Categories/categoriesActionCreators';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';

const useCategoryDialog = (props: Props) :  useAppToolbarOutcome => {
    
    const { handleCloseCategoryDialog } = props;

    const categories = useSelector<StoreStateType, Category[]>(state => state.categories);
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    const [categoryName, setCategoryName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const checkDuplicate = () => {
        return categories.find(({name}) => name === categoryName);
    };

    useEffect(() => {
        setCategoryName(selectedCategory)
    }, [selectedCategory]);

    useEffect(() => {
        const duplicate = checkDuplicate();
        if (duplicate) {
            setError(true);
        } else {
            setError(false);
        }
    }, [categoryName]);
    
    const handleAddCategory = () => {
        if (error) {
            return;
        }
        createCategory({name: categoryName});
        handleCloseCategoryDialog();
        setCategoryName('');
        setError(false);
    };

    const handleEditCategory = () => {
        if (error) {
            return;
        }
        editCategory({name: selectedCategory}, categoryName);
        handleCloseCategoryDialog();
        setSelectedCategory(categoryName);
        setCategoryName('');
        setError(false);
    };

    return {
        categoryName,
        setCategoryName,
        handleAddCategory,
        handleEditCategory,
        error
    };
};

export interface useAppToolbarOutcome {
    categoryName: string;
    setCategoryName: React.Dispatch<React.SetStateAction<string>>;
    handleAddCategory: () => void;
    handleEditCategory: () => void;
    error: boolean;
};

interface Props {
    handleCloseCategoryDialog: () => void;
};

export default useCategoryDialog;