import { store } from '../store';
import * as actionTypes from './selectedLocationActionTypes';

export const setSelectedLocation = (locationName: string): void => {
    store.dispatch({
        type: actionTypes.SET_SELECTED_LOCATION,
        payload: locationName 
    })
};