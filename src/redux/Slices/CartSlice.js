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

const calculateSum = (number1, number2, totalCount) => {
    if (totalCount > 0) {
        return bigDecimal.add(number1, number2)
    } else if (totalCount <= 0) {
        return 0
    } else {
        return bigDecimal.subtract(number1, number2)
    }
}

const getTotalCount = arr => arr.reduce((sum, obj) => obj.count + sum, 0)

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalCount: 0,
        totalPrice: null
    },
    reducers: {
        setItems(state, action) {
            state.items.addItem(action.payload)
            state.totalCount++
            state.totalPrice = calculateSum(state.totalPrice, action.payload.price, state.totalCount)
        },
        deleteItem(state, action) {
            state.items.deleteItem(action.payload)
            if (state.totalCount === 0) state.totalCount = 0
            else {
                state.totalCount--
            }
            state.totalPrice = calculateSum(state.totalPrice, action.payload.price, state.totalCount)
        }
    }
})

export const {setItems, deleteItem} = cartSlice.actions

export default cartSlice.reducer