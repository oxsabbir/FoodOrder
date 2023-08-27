import { createContext, useReducer } from "react"

export const StoreContext = createContext()


const defaultCartState = {
    totalAmount : 0,
    items : [],
    totalPrice : 0,
}

export const StoreReducer = function (state, action) {
        if(action.type === "ADD") {
            return {
                ...state,
                totalAmount : action.value.amount,
                items : [action.value,...state.items]
            }
        }
}




const StoreProvider = function ({ children }) {
    
    const [state, dispatch] = useReducer(StoreReducer,defaultCartState)

    const addItemHandler = function (item, amount) {        
        dispatch({
            type: "ADD",
            value : {
                name : item.name,
                price : item.price * +amount,
                amount, 
                id: item.id
            }
        })
        console.log(state)
    }




    const removeItemHandler = function(id) {

    }

    const cartContext = {
        totalAmount : state.totalAmount,
        items : state.items, 
        addItem: addItemHandler,
        removeItem : removeItemHandler,
        totalPrice : state.totalPrice
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