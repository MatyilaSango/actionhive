import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "../features/search/searchSlice"
import notesReducer from "../features/notes/notesSlice"
import todoReducer from "../features/todo/todo"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        notes: notesReducer,
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch