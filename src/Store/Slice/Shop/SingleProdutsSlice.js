import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const FecthSingleProducts = createAsyncThunk(
    "Single-Products",
    async ({ payload, SingleProdutsID }, { rejectWithValue }) => {

        try {
            const response = await Api.actionHandle({
                url: Api.SingleProduts.replace("{id}", SingleProdutsID),
                method: "GET",

            })
            let data = await response;
            if (response.status === 200) {
                let sam = response.data;
                return sam;
            } else {
                return rejectWithValue(data);
            }
        }
        catch (e) {
            const message = e.toString();
            return rejectWithValue(message);

        }


    }
)
const singleSlice = createSlice({
    name: "Single-Products",
    initialState: {
        singleproduts: {}

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FecthSingleProducts.fulfilled, (state, {payload}) => {
            state.singleproduts = payload
            console.log("gjgh:::",payload);
        })
    }
})
export default singleSlice.reducer
