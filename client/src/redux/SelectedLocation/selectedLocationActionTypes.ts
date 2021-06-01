export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION';

interface SetSelectedLocation {
    type: typeof SET_SELECTED_LOCATION,
    payload: string 
};

export type SelectedLocationAction = SetSelectedLocation;