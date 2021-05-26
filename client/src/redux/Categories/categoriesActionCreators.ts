import Category from 'models/Category';

import { store } from '../store';
import * as actionTypes from './categoriesActionTypes';

export const setCategories = (categories: Category[]): void => {
    store.dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: { categories }
    })
};

export const createCategory = (category: Category): void => {
    store.dispatch({
        type: actionTypes.CREATE_CATEGORY,
        payload: { category }
    })
};

export const editCategory = (category: Category, newName: string): void => {
    store.dispatch({
        type: actionTypes.EDIT_CATEGORY,
        payload: { category, newName }
    })
};

export const deleteCategory = (category: Category): void => {
    store.dispatch({
        type: actionTypes.DELETE_CATEGORY,
        payload: { category }
    })
};