import {configureStore} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
const initialCartState = {
    totalAmount : 0,
    items : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialCartState,
    reducers : {
        addToCart (state, action) {
            const currentItem = state.items.find(items => items.id === action?.payload.id)
            const isExist = Boolean(currentItem)


            if(isExist) {
            const index = state.items.findIndex(items=> items.id === action.payload.id)
            const basePrice = currentItem.price / currentItem.amount
            const amount = action.payload.amount
            state.items[index].amount += amount     
            state.items[index].price += basePrice * amount  
            state.totalAmount += amount
                return
            }

            state.totalAmount += action.payload.amount
            const readyItems = {...action.payload.selectedItem, amount : action.payload.amount}
            state.items = [readyItems,...state.items]
        },

        increament (state, action) {
            const index = state.items.findIndex(items=> items.id === action.payload.id)
            const currentItem = state.items[index]

            const basePrice = currentItem.price / currentItem.amount
            currentItem.price += basePrice
            currentItem.amount++
            state.totalAmount++
        },

        decreament (state,action) {
            const index = state.items.findIndex(items=> items.id === action.payload.id)
            const currentItem = state.items[index]

            const basePrice = currentItem.price / currentItem.amount
            currentItem.price -= basePrice
            currentItem.amount--
            state.totalAmount--
            if(state.items[index].amount === 0) {
                state.items.splice(index,1)   
            }
        }

    }
}) 

const store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions 


export default store