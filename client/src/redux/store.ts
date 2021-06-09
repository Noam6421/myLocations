import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'

import { initalSelectedLocation } from 'models/Location';

import reducers from './reducers';
import StoreStateType from './storeStateType';
import { initalViewOptions } from 'models/ViewOptions';

const initialState = {
    categories: [], 
    locations: [], 
    selectedCategory: '', 
    selectedLocation: initalSelectedLocation, 
    viewOptions: initalViewOptions,
    _persist: {version: 0, rehydrated: true} 
};

const saveToLocalStorage = (state: StoreStateType & PersistPartial) => {
    try {
        const localStorageCategories = JSON.stringify(state.categories);
        localStorage.setItem('categories', localStorageCategories);
        const localStorageLocations = JSON.stringify(state.locations);
        localStorage.setItem('locations', localStorageLocations);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const localStorageCategories = localStorage.getItem('categories');
        const localStorageLocations = localStorage.getItem('locations');
        if (localStorageCategories === null || localStorageLocations === null) {
            return localStorageCategories === null 
                ? localStorageLocations === null
                    ?  initialState                   
                    : {...initialState, locations: JSON.parse(localStorageLocations)}
                : {...initialState, categories: JSON.parse(localStorageCategories)}
        } 
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};
  
const persistConfig: PersistConfig<StoreStateType> = {
    key: 'root',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

store.subscribe(() => saveToLocalStorage(store.getState()));