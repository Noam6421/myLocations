import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

import StoreStateType from './storeStateType';
import categoriesReducer from './Categories/categoriesReducer';
import selectedCategoryReducer from './SelectedCategory/selectedCategoryReducer';

export default combineReducers <StoreStateType> ({
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
}) as unknown as Reducer<CombinedState<StoreStateType>, AnyAction>;