import Location from 'models/Location';

import { store } from '../store';
import * as actionTypes from './selectedLocationActionTypes';

export const setSelectedLocation = (location: Location): void => {
    store.dispatch({
        type: actionTypes.SET_SELECTED_LOCATION,
        payload: location 
    })
};