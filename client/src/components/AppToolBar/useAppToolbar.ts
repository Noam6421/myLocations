import { initalSelectedLocation } from 'models/Location';
import React, { useState } from 'react';

import Location from 'models/Location';
import { deleteCategory } from 'redux/Categories/categoriesActionCreators';
import { deleteLocation } from 'redux/Locations/locationsActionCreators';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';
import { setSelectedLocation } from 'redux/SelectedLocation/selectedLocationActionCreators';

const useAppToolbar = () :  useAppToolbarOutcome => {

    const [openCategoryDialog, setOpenCategoryDialog] = useState<boolean>(false);
    const [openLocationDialog, setOpenLocationDialog] = useState<boolean>(false);

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

    const handleOpenLocationDialog = () => {
        setOpenLocationDialog(true);
    };

    const handleCloseLocationDialog = () => {
        setOpenLocationDialog(false);
    };

    const handleDeleteLocation = (selectedLocation: Location) => {
        deleteLocation(selectedLocation);
        setSelectedLocation(initalSelectedLocation);
    };

    return {
        openCategoryDialog,
        handleOpenCategoryDialog,
        handleCloseCategoryDialog,
        handleDeleteCategory, 
        openLocationDialog,
        handleOpenLocationDialog,
        handleCloseLocationDialog,
        handleDeleteLocation
    };
};

export interface useAppToolbarOutcome {
    openCategoryDialog: boolean;
    handleOpenCategoryDialog: () => void;
    handleCloseCategoryDialog: () => void;
    handleDeleteCategory: (selectedCategory: string) => void;
    openLocationDialog: boolean;
    handleOpenLocationDialog: () => void;
    handleCloseLocationDialog: () => void;
    handleDeleteLocation: (selectedLocation: Location) => void;
};

export default useAppToolbar;