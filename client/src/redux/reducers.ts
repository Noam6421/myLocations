import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

import StoreStateType from './storeStateType';
import categoriesReducer from './Categories/categoriesReducer';

export default combineReducers <StoreStateType> ({
    categories: categoriesReducer,
}) as unknown as Reducer<CombinedState<StoreStateType>, AnyAction>;