import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

import userReducer from './userSlice'

const reducers = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducers
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch