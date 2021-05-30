import {configureStore} from '@reduxjs/toolkit'
import utilsSlice from "./Slices/UtilsSlice";
import productSlice from "./Slices/ProductItemSlice";
import cartSlice from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
        productData: productSlice,
        cartData: cartSlice
    }
})

export default store;