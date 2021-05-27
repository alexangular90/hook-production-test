import {configureStore} from '@reduxjs/toolkit'
import utilsSlice from "./Slices/UtilsSlice";
import productSlice from "./Slices/ProductItemSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
        productData: productSlice
    },
})

export default store;