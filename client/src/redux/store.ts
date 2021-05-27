import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'

import Category from 'models/Category';

import reducers from './reducers';
import StoreStateType from './storeStateType';

const saveToLocalStorage = (categories: Category[]) => {
    try {
        const localStorageCategories = JSON.stringify(categories);
        localStorage.setItem('categories', localStorageCategories);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const localStorageCategories = localStorage.getItem('categories');
        if (localStorageCategories === null) return undefined;
        return JSON.parse(localStorageCategories);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};
  
const persistConfig: PersistConfig<StoreStateType> = {
    key: 'root',
    storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

store.subscribe(() => saveToLocalStorage(store.getState().categories));