import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"




export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "products",
        }),
    }),
});


export const { useGetAllBooksQuery } = productApi;

