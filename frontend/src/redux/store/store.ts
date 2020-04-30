import { AppReducer } from './../reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';

const persistedReducer = persistReducer(
	{
		key: 'School Footprint',
		storage,
	},
	AppReducer
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
