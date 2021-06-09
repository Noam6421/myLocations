import Location, { initalSelectedLocation } from 'models/Location';

import * as Actions from './selectedLocationActionTypes';

const selectedLocationReducer = (state = initalSelectedLocation, action: Actions.SelectedLocationAction): Location => {
    switch (action.type) {
        case Actions.SET_SELECTED_LOCATION: 
            return action.payload;
        default: 
            return state;
    };
};

export default selectedLocationReducer;