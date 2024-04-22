import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "../features/search/searchSlice"
import notesReducer from "../features/notes/notes"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        notes: notesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch