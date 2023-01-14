import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const FeachCateogoriesList = createAsyncThunk(
    "Cateogories-List",
    async (playload, { rejectWithValue }) => {

        try {
            const response = await Api.actionHandle({
                url: Api.CategoreList,
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
const CateogoriesListSlice = createSlice({
    name: "Cateogories-List",
    initialState: {
        CateogoriesList: []
    },
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(FeachCateogoriesList.fulfilled, (state, action) => {
            state.CateogoriesList = [];
            action.payload.data.forEach((item) => state.CateogoriesList.push(item));

            console.log("Cateogories:", action.payload);
        })
    }
})
export default CateogoriesListSlice.reducer