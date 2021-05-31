import {createSlice} from '@reduxjs/toolkit'

const bigDecimal = require('js-big-decimal');

Array.prototype.addItem = function (item) {
    const el = this.find(el => el.id === item.id);
    if (el) el.count++;
    else this.push(Object.assign(item, {count: 1}));
}

Array.prototype.deleteItem = function (item) {
    const el = this.find(el => el.id === item.id);
    if (el) {
        if (el.count > 1) el.count--;
        else this.splice(this.indexOf(el), 1)
    }
}

const decrement = (array, item, totalPrice) => {
    let el = array.find(el => el.id === item.id);
    if (el) {
        return bigDecimal.subtract(totalPrice, el.price)
    } else {
        return totalPrice - el.price
    }
}

const increment = (item, totalPrice) => {
    return bigDecimal.add(totalPrice, item.price)
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalCount: 0,
        totalPrice: 0
    },
    reducers: {
        setItems(state, action) {
            state.items.addItem(action.payload)
            state.totalCount++
            state.totalPrice = increment(action.payload, state.totalPrice)
        },
        deleteItem(state, action) {
            state.totalPrice = decrement(state.items, action.payload, state.totalPrice)
            state.items.deleteItem(action.payload)
            if (state.totalCount === 0) state.totalCount = 0
            else {
                state.totalCount--
            }

        }
    }
})

export const {setItems, deleteItem} = cartSlice.actions

export default cartSlice.reducer