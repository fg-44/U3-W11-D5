import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './Features/playerSlice'
import { Api } from '../redux/Fetch'


export const store = configureStore({
  reducer: {
  [Api.reducerPath]: Api.reducer,
  player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});