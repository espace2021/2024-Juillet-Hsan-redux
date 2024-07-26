import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Définir l'API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://2024-juillet-hsan-backend.vercel.app/api/articles/art/' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: ({ page = 1, limit = 10, filter = '' }) => 
        `pagination?page=${page}&pageSize=${limit}&filtre=${filter}`,
    }),
  }),
});

// Exporter le hook généré par RTK Query
export const { useGetItemsQuery } = api;
