import { configureStore } from '@reduxjs/toolkit'

import authReducer from "../features/authSlice"
import articleReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"
import cartReducer from "../features/cartSlice"

import {api} from '../features/rtkQueryArticle'

import articleReducerRTK from '../features/articleSliceRTK';
import { persistStore, persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
 } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducerCart = persistReducer(persistConfig, cartReducer)

const persistedReducerAuth = persistReducer(persistConfig, authReducer)


export const store = configureStore({
reducer: {
  storearticles:articleReducer,
  storecategories : categoriesReducer,
  storecart : persistedReducerCart,
 // storecart : cartReducer,
  [api.reducerPath]: api.reducer,
  articleRTK : articleReducerRTK,
  auth:persistedReducerAuth
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})

export const persistor = persistStore(store);

