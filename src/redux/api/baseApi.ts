import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IBook } from '../../interfaces/types';

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_URL }),
    tagTypes: ["book"],
    endpoints: (builder) => ({
        // Get All Books
        getBooks: builder.query<IBook[], void>({
            query: () => "/books",
            transformResponse: (response: { success: boolean; message: string; data: IBook[] }) => response.data,
            providesTags: ["book"]
        }),
        // Get Single Book
        getSingleBooks: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"]
        }),
        // Create New Book
        createBook: builder.mutation({
            query: (bookData) => ({
                url: '/create-book',
                method: 'POST',
                body: bookData
            }),
            invalidatesTags: ["book"]
        }),
        // Update Book
        updateBook: builder.mutation({
            query: ({ id, ...bookData }) => ({
                url: `/edit-book/${id}`,
                method: 'PUT',
                body: bookData
            }),
            invalidatesTags: ["book"]
        }),
        // Delete Book
        deleteBook: builder.mutation({
            query: (id: string) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["book"]
        }),
        // Borrow Book
        borrowBook: builder.mutation({
            query: ({ bookId, ...borrowData }) => ({
                url: `/borrow/${bookId}`,
                method: 'POST',
                body: borrowData
            }),
            invalidatesTags: ["book"]
        }),
        // Get All Borrow Books
        borrowBooks: builder.query({
            query: () => "/borrow-summary",
            providesTags: ["book"]
        }),
    })
})

export const { useGetBooksQuery, useCreateBookMutation, useGetSingleBooksQuery, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useBorrowBooksQuery } = baseApi