import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type TInitialState = {
    value: string
}

const initialState: TInitialState = {
    value: ""
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        storeSearch: (state, action: PayloadAction<TInitialState>) => {
            state = { ...state, value: action.payload.value }
        }
    }
})

export const { storeSearch } = searchSlice.actions
export default searchSlice.reducer