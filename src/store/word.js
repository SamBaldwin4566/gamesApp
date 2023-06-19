// Import to create a new slice
import { createSlice } from "@reduxjs/toolkit";

// Create new slice for the word
export const wordSlice = createSlice({

    name: "word",
    initialState: {
        newWord: ""
    },
    // Reducer to update the word
    reducers: {
        createWord: (state, action) => {
            state.newWord = action.payload
        }
    }
})

// Export the slice
export const { createWord } = wordSlice.actions;
export default wordSlice.reducer;