import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../types";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  tagTypes: ["Books"],
  endpoints: builder => ({
    getBooks: builder.query<Book[], string>({
      query: () => "/",
      providesTags: ["Books"]
    }),
    updateBooks: builder.mutation<string, Book>({
      query: book => {
        return {
          url: "/update",
          method: "PUT",
          body: book
        };
      },
      invalidatesTags: ["Books"]
    }),
    addBooks: builder.mutation<string, Book>({
      query: book => {
        return {
          url: "/add",
          method: "POST",
          body: book
        };
      },
      invalidatesTags: ["Books"]
    }),
    deleteBook: builder.mutation<string, string>({
      query: bookId => {
        return {
          url: `/delete/${bookId}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ["Books"]
    })
  })
});

export const {
  useGetBooksQuery,
  useUpdateBooksMutation,
  useDeleteBookMutation,
  useAddBooksMutation
} = booksApi;
export { booksApi };
