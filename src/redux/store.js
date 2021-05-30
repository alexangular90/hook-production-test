import {configureStore} from '@reduxjs/toolkit'
import utilsSlice from "./Slices/UtilsSlice";
import productSlice from "./Slices/ProductItemSlice";
import trashSlice from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
        productData: productSlice,
        trashData: trashSlice
    }
})

export default store;