import {createSlice} from '@reduxjs/toolkit'

export const trashSlice = createSlice({
    name: 'trashSlice',
    initialState: {
        items: [],
        totalCount: 0
    },
    reducers: {
        setItems(state, action) {
            state.items.push(action.payload)
            action.payload.count += 1
            state.totalCount = state.items.length
        }
    }
})

export const {setItems} = trashSlice.actions

export default trashSlice.reducer