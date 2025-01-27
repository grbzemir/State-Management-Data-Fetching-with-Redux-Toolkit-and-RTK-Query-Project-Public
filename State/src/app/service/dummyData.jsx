import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const dummyApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/api/products",
        }),
    }),

});