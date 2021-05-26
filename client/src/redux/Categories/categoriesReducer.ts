import Category from 'models/Category';

import * as Actions from './categoriesActionTypes';

const initialState: Category[] = [];

const categoriesReducer = (state = initialState, action: Actions.CategoriesAction): Category[] => {
    switch (action.type) {
        case Actions.SET_CATEGORIES: 
            return action.payload.categories;
        case Actions.CREATE_CATEGORY: 
            return [
                ...state,
                action.payload.category
            ];
        default: 
            return state;
    };
};

export default categoriesReducer;