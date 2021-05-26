import Category from 'models/Category';

import * as Actions from './selectedCategoryActionTypes';

const initialState: Category | null = null;

const selectedCategoryReducer = (state = initialState, action: Actions.SelectedCategoryAction): Category | null => {
    switch (action.type) {
        case Actions.SET_SELECTED_CATEGORY: 
            return action.payload.category;
        default: 
            return state;
    };
};

export default selectedCategoryReducer;