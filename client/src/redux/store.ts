import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'

import reducers from './reducers';
import StoreStateType from './storeStateType';

const saveToLocalStorage = (state: StoreStateType & PersistPartial) => {
    try {
        const localStorageCategories = JSON.stringify(state.categories);
        localStorage.setItem('categories', localStorageCategories);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const localStorageCategories = localStorage.getItem('categories');
        if (localStorageCategories === null) return {categories: [], selectedCategory: ''};
        return JSON.parse(localStorageCategories);
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