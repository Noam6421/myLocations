import Category from 'models/Category';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import StoreStateType from 'redux/storeStateType';
import { setCategories } from 'redux/Categories/categoriesActionCreators';

const useApp = () :  useAppOutcome => {
    
//    const categories = useSelector<StoreStateType, Category[]>(state => state.categories)

    useEffect(() => {
        const localStorageCategories = localStorage.getItem("categories");
        setCategories([{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}, {name: 'e'}, {name: 'f'}, {name: 'g'}, {name: 'h'}]);
    }, [])
    
    return {
        
    }
};

export interface useAppOutcome {
};

export default useApp;