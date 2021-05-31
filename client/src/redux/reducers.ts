import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

import StoreStateType from './storeStateType';
import locationsReducer from './Locations/locationsReducer';
import categoriesReducer from './Categories/categoriesReducer';
import selectedCategoryReducer from './SelectedCategory/selectedCategoryReducer';

export default combineReducers <StoreStateType> ({
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
    locations: locationsReducer
}) as unknown as Reducer<CombinedState<StoreStateType>, AnyAction>;