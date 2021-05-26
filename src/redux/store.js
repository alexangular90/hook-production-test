import {configureStore} from '@reduxjs/toolkit'
import utilsSlice from "./Slices/UtilsSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
    },
})

export default store;