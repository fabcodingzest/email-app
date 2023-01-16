import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Email, api } from '../../App/services/api'

export interface EmailState {
  activeEmail: string
  activeFilter: string
  allEmails: Email[]
  read: string[]
  favourite: string[]
}

const initialState: EmailState = {
  activeEmail: '',
  activeFilter: 'unread',
  allEmails: [],
  read: [],
  favourite: [],
}

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setActiveEmail: (state, action: PayloadAction<string>) => {
      state.activeEmail = action.payload
    },
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload
      state.activeEmail = ''
    },
    removeActiveEmail: (state) => {
      state.activeEmail = ''
    },
    addToRead: (state, action: PayloadAction<string>) => {
      state.read.push(action.payload)
      if (state.activeFilter === 'unread') {
        state.activeFilter = 'read'
      }
    },
    addToFavourite: (state, action: PayloadAction<string>) => {
      state.favourite.push(action.payload)
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourite.filter((item) => item !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.fetchEmails.matchFulfilled, (state, { payload }) => {
      state.allEmails = payload.list
    })
  },
})

export const { removeActiveEmail, setActiveEmail, setActiveFilter, addToRead, addToFavourite } =
  emailSlice.actions
export default emailSlice.reducer
