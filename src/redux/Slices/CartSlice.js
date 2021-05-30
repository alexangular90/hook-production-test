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

Array.prototype.getTotalPrice = arr => arr.reduce((sum, obj) => (obj.price + sum), 0)

const getTotalPrice = arr => arr.reduce((sum, obj) => (obj.price + sum), 0)
const getTotalCount = arr => arr.reduce((sum, obj) => obj.count + sum, 0)

export const cartSlice = createSlice({
    name: 'trashSlice',
    initialState: {
        items: [],
        totalCount: 0,
        totalPrice: null
    },
    reducers: {
        setItems(state, action) {
            state.items.addItem(action.payload)
          },
        deleteItem(state, action) {
            state.items.deleteItem(action.payload)
            if (state.totalCount === 0) {
                state.totalCount = 0
            } else {
                state.totalCount--
            }
        },
        sumItem(state, action){
            state.totalPrice = getTotalPrice(state.items)
        }
    }
})

export const {setItems, deleteItem, sumItem} = cartSlice.actions

export default cartSlice.reducer