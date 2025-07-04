import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IBook } from '../../interfaces/types';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], void>({
            query: () => "/books",
            transformResponse: (response: { success: boolean; message: string; data: IBook[] }) => response.data,
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: '/create-book',
                method: 'POST',
                body: bookData
            })
        })
    })
})

export const { useGetBooksQuery, useCreateBookMutation } = baseApi