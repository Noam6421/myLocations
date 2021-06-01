import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

import StoreStateType from './storeStateType';
import locationsReducer from './Locations/locationsReducer';
import categoriesReducer from './Categories/categoriesReducer';
import selectedCategoryReducer from './SelectedCategory/selectedCategoryReducer';
import selectedLocationReducer from './SelectedLocation/selectedLocationReducer';

export default combineReducers <StoreStateType> ({
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
    locations: locationsReducer,
    selectedLocation: selectedLocationReducer,
}) as unknown as Reducer<CombinedState<StoreStateType>, AnyAction>;