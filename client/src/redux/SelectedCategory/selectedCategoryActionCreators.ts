import Category from 'models/Category';

import { store } from '../store';
import * as actionTypes from './selectedCategoryActionTypes';

export const setSelectedCategory = (category: Category | null): void => {
    store.dispatch({
        type: actionTypes.SET_SELECTED_CATEGORY,
        payload: { category }
    })
};