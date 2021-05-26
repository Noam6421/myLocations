import * as Actions from './selectedCategoryActionTypes';

const initialState: string = '';

const selectedCategoryReducer = (state = initialState, action: Actions.SelectedCategoryAction): string => {
    switch (action.type) {
        case Actions.SET_SELECTED_CATEGORY: 
            return action.payload.categoryName;
        default: 
            return state;
    };
};

export default selectedCategoryReducer;