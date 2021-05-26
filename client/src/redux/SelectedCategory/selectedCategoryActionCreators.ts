import { store } from '../store';
import * as actionTypes from './selectedCategoryActionTypes';

export const setSelectedCategory = (categoryName: string): void => {
    store.dispatch({
        type: actionTypes.SET_SELECTED_CATEGORY,
        payload: { categoryName }
    })
};