import Location from 'models/Location';

import * as Actions from './locationsActionTypes';

const initialState: Location[] = [];

const locationsReducer = (state = initialState, action: Actions.LocationsAction): Location[] => {
    switch (action.type) {
        case Actions.SET_LOCATIONS: 
            return action.payload.locations;
        case Actions.CREATE_LOCATION: 
            return [
                ...state,
                action.payload.location
            ];
        case Actions.EDIT_LOCATION: 
            return state.map((location) => {
                if (location.name === action.payload.location.name) {
                    return {
                        ...action.payload.changes
                    }
                } else {
                return location
                }
            });
        case Actions.DELETE_LOCATION: 
            return state.filter(({ name }) => name !== action.payload.location.name);
        default: 
            return state;
    };
};

export default locationsReducer;