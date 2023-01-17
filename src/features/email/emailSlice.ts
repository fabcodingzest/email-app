import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Email, api } from '../../App/services/api'

export interface EmailState {
  activeEmail: string
  activeFilter: string
  allEmails: Email[]
  read: string[]
  unread: string[]
  favourite: string[]
}

const initialState: EmailState = {
  activeEmail: '',
  activeFilter: 'unread',
  allEmails: [],
  read: [],
  unread: [],
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
      const id = action.payload
      const updatedUnread = state.unread.filter((item) => item !== id)
      !state.read.includes(id) && state.read.push(id)
      state.unread = updatedUnread
      if (state.activeFilter === 'unread') {
        state.activeFilter = 'read'
      }
    },
    addToFavourite: (state, action: PayloadAction<string>) => {
      state.favourite.push(action.payload)
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      const filteredArr = state.favourite.filter((item) => item !== action.payload)
      state.favourite = filteredArr
      if (state.activeFilter === 'favourite') {
        state.activeEmail = ''
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.fetchEmails.matchFulfilled, (state, { payload }) => {
      const unreadArr = payload.list.map((item) => item.id)
      state.allEmails = [...state.allEmails, ...payload.list]
      state.unread = [...state.unread, ...unreadArr]
    })
  },
})

export const {
  removeActiveEmail,
  setActiveEmail,
  setActiveFilter,
  addToRead,
  addToFavourite,
  removeFavourite,
} = emailSlice.actions
export default emailSlice.reducer
