import * as Actions from './selectedLocationActionTypes';

const initialState: string = '';

const selectedLocationReducer = (state = initialState, action: Actions.SelectedLocationAction): string => {
    switch (action.type) {
        case Actions.SET_SELECTED_LOCATION: 
            return action.payload;
        default: 
            return state;
    };
};

export default selectedLocationReducer;