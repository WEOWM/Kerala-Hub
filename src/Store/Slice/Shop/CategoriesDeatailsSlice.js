import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const feachShopDetails = createAsyncThunk(
    "shop-Details",
    async ({ payload, DetailsID }, { rejectWithValue }) => {

        try {
            const response = await Api.actionHandle({
                url: Api.CategoreDetails.replace("{id}", DetailsID),
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

const detailsSlice = createSlice({
    name: "shop-Details",
    initialState: {
        ShopDetails: [],

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(feachShopDetails.fulfilled, (state, actions) => {
            state.ShopDetails = []
            actions.payload.forEach(items => { state.ShopDetails.push(items) });
            console.log("gjgh:::",actions.payload);
        })
    }
})
export const { ClearDetails } = detailsSlice.actions

export default detailsSlice.reducer