import { configureStore, combineReducers } from '@reduxjs/toolkit'

import playerReducer from './features/playerSlice'

const bigReducer = combineReducers({
    player: playerReducer,
  })

export const store = configureStore ({
    reducer: bigReducer,
})

export default store