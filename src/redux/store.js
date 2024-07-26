import { configureStore } from '@reduxjs/toolkit'


import articleReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"
import cartReducer from "../features/cartSlice"

import {api} from '../features/rtkQueryArticle'

import articleReducerRTK from '../features/articleSliceRTK';

import {persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducerCart = persistReducer(persistConfig, cartReducer)

//const persistedReducerAuth = persistReducer(persistConfig, authReducer)


const store = configureStore({
reducer: {
  storearticles:articleReducer,
  storecategories : categoriesReducer,
  storecart : persistedReducerCart,
  [api.reducerPath]: api.reducer,
  articleRTK : articleReducerRTK
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})
export default store

