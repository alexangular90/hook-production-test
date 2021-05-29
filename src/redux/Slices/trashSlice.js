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
            const uniqueItems = new Set()
            state.items.forEach(item => {
                uniqueItems.add(JSON.stringify(item))
            })

            const newItems = []
            uniqueItems.forEach(item => {
                newItems.push(JSON.parse(item))
            })
            state.items = newItems
        },
        deleteItem(state, action) {
            const uniqueItems = new Set()
            state.items.forEach(item => {
                uniqueItems.add(JSON.stringify(item))
            })
            if (uniqueItems.has(JSON.stringify(action.payload))) {
                if (action.payload.count > 0) action.payload.count -= 1
                else {
                    uniqueItems.delete(JSON.stringify(action.payload))
                }
            }
            const newItems = []
            uniqueItems.forEach(item => {
                newItems.push(JSON.parse(item))
            })
            state.items = newItems
        },
        incCount(state, action) {
            const uniqueItems = new Set()
            state.items.forEach(item => {
                uniqueItems.add(JSON.stringify({
                    name: item.name,
                    count: item.count + 1
                }))
            })
            const newItems = []
            uniqueItems.forEach(item => {
                newItems.push(JSON.parse(item))
            })
            state.items = newItems
        }
    }
})

export const {setItems, deleteItem, incCount} = trashSlice.actions

export default trashSlice.reducer