import { configureStore } from "@reduxjs/toolkit";
import CateogoriesListSlice from "./Slice/Shop/CateogoriesListSlice"
import detailsSlice from "./Slice/Shop/CategoriesDeatailsSlice"
import RandomDetailsSlice from "./Slice/Shop/RondamDetailSlice"
import singleSlice from "./Slice/Shop/SingleProdutsSlice"
import CartListSlice from "./Slice/Products/AddtToCartSlice"

export const store = configureStore({
    reducer :{
        CateogoriesListSlice,
        detailsSlice,
        RandomDetailsSlice,
        singleSlice,
        CartListSlice,
        

    }
})