import {createSlice} from '@reduxjs/toolkit'

Array.prototype.addItem = function (item) {
    const el = this.find(el => el.id === item.id);
    if (el) el.count++;
    else this.push(item);
}

Array.prototype.deleteItem = function (item) {
    const el = this.find(el => el.id === item.id);
    if (el) {
        if (el.count > 1) el.count--;
        else this.splice(this.indexOf(el), 1)
    }
}

export const trashSlice = createSlice({
    name: 'trashSlice',
    initialState: {
        items: [],
        totalCount: 0
    },
    reducers: {
        setItems(state, action) {
            state.items.addItem(action.payload)
        },
        deleteItem(state, action) {
            state.items.deleteItem(action.payload)
        }
    }
})

export const {setItems, deleteItem, incCount} = trashSlice.actions

export default trashSlice.reducer