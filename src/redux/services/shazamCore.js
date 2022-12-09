import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e47cd5caa5msh09c99ae13dbcfe0p1a22bejsne4398765123f');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: '/charts/word'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;