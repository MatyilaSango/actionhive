import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TNote } from "../../../../types/types"

const initialState: TNote[] = new Array(10).fill({
    id: 123456789,
    head: "Todo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: new Date().toDateString()
})

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        storeNote: (state, action: PayloadAction<TNote>) => {
            state = [ ...state, action.payload ]
        }
    }
})

export const { storeNote } = notesSlice.actions
export default notesSlice.reducer