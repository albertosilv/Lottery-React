import {configureStore,combineReducers} from '@reduxjs/toolkit'
import UserReducer from './User.store'
import ResetReducer from './Reset.store'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  import { PersistGate } from 'redux-persist/integration/react'
const reducers = combineReducers({
        user:UserReducer,
        reset:ResetReducer
})



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer<RootState>(persistConfig, reducers)

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
  
const Persistor = persistStore(Store)
export default{ Store,Persistor};
export interface StoreState {
    user:any,

  }
export type RootState = ReturnType<typeof reducers>


