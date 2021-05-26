import { createSlice } from '@reduxjs/toolkit'

export const utilsSlice = createSlice({
    name: 'utils',
    initialState: {
        resize: false,
    },
    reducers: {
        setResize: (state, action) => {
            state.resize = action.payload
        }
    },
})

export const { setResize } = utilsSlice.actions

export default utilsSlice.reducer