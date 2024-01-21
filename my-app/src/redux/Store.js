import { configureStore, combineReducers } from '@reduxjs/toolkit'
import playerReducer from './Features/playerSlice'

const bigReducer = combineReducers({
  reducer: {
    player: playerReducer,
  }

})

const store = configureStore({
  reducer: bigReducer,
})

export default store