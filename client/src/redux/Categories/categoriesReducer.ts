import Category from 'models/Category';

import * as Actions from './categoriesActionTypes';

const initialState: Category[] = [];

const categoriesReducer = (state = initialState, action: Actions.CategoriesAction): Category[] => {
    switch (action.type) {
        case Actions.SET_CATEGORIES: 
            return action.payload.categories;
        default: 
            return state;
    };
};

export default categoriesReducer;