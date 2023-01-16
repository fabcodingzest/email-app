import { configureStore } from '@reduxjs/toolkit'
import emailReducer from '../features/email/emailSlice'
import { api } from './services/api'

export const store = configureStore({
  reducer: {
    email: emailReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
