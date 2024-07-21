import { configureStore } from '@reduxjs/toolkit'


import articleReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"

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


//const persistedReducerAuth = persistReducer(persistConfig, authReducer)

const store = configureStore({
reducer: {
  storearticles:articleReducer,
  storecategories : categoriesReducer
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export default store
