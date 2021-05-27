import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'productItem',
    initialState: {
        product: {},
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        }
    },
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer