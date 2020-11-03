import { createReducer } from '@reduxjs/toolkit'
import {
  updateAliossToken
} from './actions'

const currentTimestamp = () => new Date().getTime()

export interface StorageState {
  // the timestamp of the last updateVersion action
  name?: string
  timestamp: number
}

export const initialState: StorageState = {
  name: '',
  timestamp: currentTimestamp()
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateAliossToken, (state, action) => {
      state.name = action.payload.name
      state.timestamp = currentTimestamp()
    })
)
