import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../services/books_api";
import { setupListeners } from "@reduxjs/toolkit/query";
import bookSlice from "./slice/book_slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    book: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
setupListeners(store.dispatch);
