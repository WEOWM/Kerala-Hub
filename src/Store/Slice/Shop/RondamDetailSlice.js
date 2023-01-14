import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const FeacthDetailsRandom = createAsyncThunk(
    "Details-Random",
    async (playload, { rejectWithValue }) => {
        try {
            const response = await Api.actionHandle({
                url: Api.DetailsRANDOM,
                method: "GET",

            })
            let data = await response

            if (response.status === 200) {
                let Newdata = response
                return Newdata
            }
            else {
                return rejectWithValue(data)
            }

        }
        catch (e) {
            const message = e
            return rejectWithValue(message)

        }
    }

)
const RandomDetailsSlice = createSlice({
    name: "Details-Random",
    initialState: {
        RandomDtails: []
    },
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(FeacthDetailsRandom.fulfilled, (state, action) => {
            state.RandomDtails = [];
            action.payload.data.forEach((item) => state.RandomDtails.push(item));
            console.log("ee:", state.RandomDtails);

        })
    }
})
export default RandomDetailsSlice.reducer