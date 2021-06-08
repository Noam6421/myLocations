import { store } from '../store';
import * as actionTypes from './viewOptionsActionTypes';

export const setSort = (sort: string): void => {
    store.dispatch({
        type: actionTypes.SET_SORT,
        payload: sort
    })
};

export const setGroupBy = (groupBy: boolean): void => {
    store.dispatch({
        type: actionTypes.SET_GROUP_BY,
        payload: groupBy
    })
};

export const setFilter = (filter: string): void => {
    store.dispatch({
        type: actionTypes.SET_FILTER,
        payload: filter
    })
};