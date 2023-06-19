// Import to create a new slice
import { createSlice } from "@reduxjs/toolkit";

// import all the hangman images
import state1 from "../hangmandrawings/state1.GIF"
import state2 from "../hangmandrawings/state2.GIF"
import state3 from "../hangmandrawings/state3.GIF"
import state4 from "../hangmandrawings/state4.GIF"
import state5 from "../hangmandrawings/state5.GIF"
import state6 from "../hangmandrawings/state6.GIF"
import state7 from "../hangmandrawings/state7.GIF"
import state8 from "../hangmandrawings/state8.GIF"
import state9 from "../hangmandrawings/state9.GIF"
import state10 from "../hangmandrawings/state10.gif"
import state11 from "../hangmandrawings/state11.GIF"

// Create an array of all the images
let images = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11]


// Create new slice for images
export const imagesSlice = createSlice({

    name: "images",
    initialState: {
        counter: 0,
        image: images[0]
    },
    // Reducers to update the counter and image
    reducers: {
        updateImage: (state, action) => {
            state.image = images[action.payload]
            state.counter = action.payload
        },
    }

})

// Export the slice
export const { updateImage } = imagesSlice.actions;
export default imagesSlice.reducer;