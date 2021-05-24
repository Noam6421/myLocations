import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

import StoreStateType from './storeStateType';

export default combineReducers <StoreStateType> ({
     
}) as unknown as Reducer<CombinedState<StoreStateType>, AnyAction>;