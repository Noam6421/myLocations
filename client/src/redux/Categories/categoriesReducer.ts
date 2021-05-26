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
        case Actions.EDIT_CATEGORY: 
            return state.map((category) => {
                if (category.name === action.payload.category.name) {
                    return {
                        name: action.payload.newName
                    }
                } else {
                return category
                }
            });
        case Actions.DELETE_CATEGORY: 
            return state.filter(({ name }) => name !== action.payload.category.name);
        default: 
            return state;
    };
};

export default categoriesReducer;