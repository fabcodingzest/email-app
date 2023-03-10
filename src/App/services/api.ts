import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/constants'

export interface Email {
  id: string
  from: {
    email: string
    name: string
  }
  date: number
  subject: string
  short_description: string
}

export interface EmailDetails {
  id: string
  body: string
}

interface EmailResponse {
  list: Email[]
  total: number
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchEmails: builder.query<EmailResponse, number | void>({
      query: (page = 1) => `/?page=${page}`,
    }),
    fetchDetails: builder.query<EmailDetails, string | void>({
      query: (id) => `/?id=${id}`,
    }),
  }),
})

export const { useFetchEmailsQuery, useFetchDetailsQuery } = api
