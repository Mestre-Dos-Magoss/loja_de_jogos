import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Game from '../models/jogo'

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://file-games.vercel.app/api' }),
  endpoints: (builder) => ({
    getGames: builder.query<Game[], void>({
      query: () => 'games'
    })
  })
})

export const { useGetGamesQuery } = Api
