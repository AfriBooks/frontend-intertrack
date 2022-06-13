import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"




export const singleProductApi = createApi({
    reducerPath: "singleProductApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getSingleBook: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});


export const { useGetSingleBookQuery } = singleProductApi;