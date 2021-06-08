import ViewOptions, { initalViewOptions } from 'models/ViewOptions';

import * as Actions from './viewOptionsActionTypes';

const viewOptionsReducer = (state = initalViewOptions, action: Actions.ViewOptionsAction): ViewOptions => {
    switch (action.type) {
        case Actions.SET_SORT: 
            return {
                ...state,
                sort: action.payload
            };
        case Actions.SET_GROUP_BY: 
            return {
                ...state,
                groupBy: action.payload
            };
        case Actions.SET_FILTER: 
            return {
                ...state,
                filter: action.payload
            };
        default: 
            return state;
    };
};

export default viewOptionsReducer;