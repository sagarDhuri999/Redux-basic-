import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
// }

export const incrementSlice = createSlice({
    name: "increment",
    initialState: { value: 0 },
    reducers: {
        increased: (state, action) => {


            state.value += action.payload


        },
        decreased: (state, action) => {

            state.value -= action.payload
            if (state.value < 0) {
                state.value = 0
            }


        }
    }
})


export const { increased, decreased } = incrementSlice.actions;

export default incrementSlice.reducer; 