import Location from 'models/Location';

export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION';

interface SetSelectedLocation {
    type: typeof SET_SELECTED_LOCATION,
    payload: Location 
};

export type SelectedLocationAction = SetSelectedLocation;