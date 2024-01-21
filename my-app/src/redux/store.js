import { configureStore, combineReducers } from '@reduxjs/toolkit'

import playerReducer from './store'

const bigReducer = combineReducers({
    player: playerReducer,
  })

export const store = configureStore ({
    reducer: bigReducer,
})

export default store
