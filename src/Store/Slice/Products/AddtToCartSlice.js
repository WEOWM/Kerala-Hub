import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const FetchAddToCart = createAsyncThunk(
    "cart-Products",
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
const CartListSlice = createSlice({
    name: "cart-Products",
    initialState: {
        cartList: {}

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchAddToCart.fulfilled,(state, {payload}) => {
            state.cartList = payload;
            console.log("gjgh:::",state.cartList);
        })
    }
})
export default CartListSlice.reducer
