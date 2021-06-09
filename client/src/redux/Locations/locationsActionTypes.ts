import Location from 'models/Location';

export const SET_LOCATIONS = 'SET_LOCATIONS';
export const CREATE_LOCATION = 'CREATE_LOCATION';
export const EDIT_LOCATION = 'EDIT_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';

interface SetLocations {
    type: typeof SET_LOCATIONS,
    payload: { locations: Location[] }
};

interface CreateLocation {
    type: typeof CREATE_LOCATION,
    payload: { location: Location }
};

interface EditLocation {
    type: typeof EDIT_LOCATION,
    payload: { location: Location, changes: Location }
};

interface DeleteLocation {
    type: typeof DELETE_LOCATION,
    payload: { location: Location }
};

export type LocationsAction = SetLocations | CreateLocation | EditLocation | DeleteLocation;