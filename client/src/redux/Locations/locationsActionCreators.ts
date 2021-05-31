import Location from 'models/Location';

import { store } from '../store';
import * as actionTypes from './locationsActionTypes';

export const setLocations = (locations: Location[]): void => {
    store.dispatch({
        type: actionTypes.SET_LOCATIONS,
        payload: { locations }
    })
};

export const createLocation = (location: Location): void => {
    store.dispatch({
        type: actionTypes.CREATE_LOCATION,
        payload: { location }
    })
};

export const editLocation = (location: Location, changes: Location): void => {
    store.dispatch({
        type: actionTypes.EDIT_LOCATION,
        payload: { location, changes }
    })
};

export const deleteLocation = (location: Location): void => {
    store.dispatch({
        type: actionTypes.DELETE_LOCATION,
        payload: { location }
    })
};