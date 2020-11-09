import { configureStore } from '@reduxjs/toolkit'

import storage from './storage/reducer'
import user from './user/reducer'

import { updateVersion } from './user/actions'

const store = configureStore({
  reducer: {
    storage,
    user,
  },
  // middleware: [...getDefaultMiddleware(), save({ states: PERSISTED_KEYS })],
  // preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
