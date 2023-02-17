import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.tvmaze.com" }),
  endpoints: (builder) => ({
    getShows: builder.query({
      query: () => "/search/shows?q=all",
    }),
  }),
});

export const { useGetShowsQuery, useLazyGetShowsQuery } = apiSlice;
