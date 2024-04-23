import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TNote } from "../../../../types/types"

const initialState : TNote[] = []
// [...Array(10).keys()].map(value => ({
//     id: `${value}`,
//     head: `Todo - ${value}`,
//     date: new Date().toDateString(),
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
// }))

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        storeNote: (state, action: PayloadAction<TNote>) => {
            return [ ...state, action.payload ]
        },
        removeNote: (state, action: PayloadAction<string>) => {
            return state.filter(note => note.id !== action.payload)
        },
        editNote: (state, action: PayloadAction<TNote>) => {
            return [...state].map(note => (note.id === action.payload.id) ? action.payload : note)
        }
    }
})

export const { storeNote, removeNote, editNote } = notesSlice.actions
export default notesSlice.reducer