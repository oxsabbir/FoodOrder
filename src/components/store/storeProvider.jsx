import { createContext, useReducer } from "react"

export const StoreContext = createContext()

const defaultCartState = {
    totalAmount: 0,
    items: [],
}

export const StoreReducer = function (state, action) {

    // refactoring here 
    const amountMaintainer = function (actionId,presentState,actionType) {

        const index = presentState.items.findIndex(item => item.id === +actionId)

        const copyState = JSON.parse(JSON.stringify(state))

        const newItems = copyState.items[index]

        const basePrice = newItems.price / newItems.amount
        if(actionType === 'INCREASE') {
            newItems.amount++
            newItems.price += basePrice
        }
        if(actionType === "DECREASE") {
            newItems.amount--
            newItems.price -= basePrice
        }

        const stateItem = copyState.items
        stateItem.splice(index, 1, newItems)
        if(newItems.amount === 0) {
            stateItem.splice(index, 1)
        }

        console.log(stateItem)

        return stateItem
    }


    if (action.type === "ADD") {

        return {
            ...state,
            totalAmount: state.totalAmount + action.value.amount,
            items: [action.value, ...state.items],
        }
    }


    if (action.type === 'INCREASE') {
        const newItem = amountMaintainer(action.id, state,action.type)
        return {
            ...state,
            items: newItem,
            totalAmount : state.totalAmount++
        }
    }

    if(action.type === "DECREASE") {
        const newItem = amountMaintainer(action.id, state,action.type)
        return {
            ...state,
            items: newItem,
            totalAmount : state.totalAmount--

        }
    }


    return defaultCartState
}


const StoreProvider = function ({ children }) {

    const [state, dispatch] = useReducer(StoreReducer, defaultCartState)

    const addItemHandler = function (item, amount) {
        dispatch({
            type: "ADD",
            value: {
                name: item.name,
                price: item.price * +amount,
                amount: +amount,
                id: item.id
            }
        })
        console.log(state)
    }


    const increaseItemHandler = function (id) {

        dispatch({
            type: "INCREASE",
            id: id,
        })
    }

    const decreaseItemHandler = function (id) {
        dispatch({
            type : "DECREASE",
            id : id
        })
    }

    const cartContext = {
        totalAmount: state.totalAmount,
        items: state.items,
        addItem: addItemHandler,
        totalPrice: state.totalPrice,
        increaseAmount: increaseItemHandler,
        decreaseAmount: decreaseItemHandler,
    }


    return (
        <>
            <StoreContext.Provider value={cartContext}>
                {children}
            </StoreContext.Provider>
        </>
    )
}


export default StoreProvider