import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TNote } from "../../../components/Note/Note"

type TInitialState = {
    active: boolean,
    type: string,
    note: TNote
}

const initialState: TInitialState = {
    active: false,
    type: "",
    note: {} as TNote
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        storeTodo: (state, action: PayloadAction<TInitialState>) => {
            return { ...state, active: action.payload.active, type: action.payload.type, note: action.payload.note }
        }
    }
})

export const { storeTodo } = todoSlice.actions
export default todoSlice.reducer