import { useContext } from "react"
import { StoreContext } from "./store/storeProvider"
const CartList = function (props) {
    const contextData = useContext(StoreContext)

    const increase = contextData.increaseAmount
    const decrease = contextData.decreaseAmount

    return (
        <>
            <div className="itemList">
                <div className="price-details">
                    <h2>{props.name}</h2>
                    <div className="prices">
                        <h3>${props.price.toFixed(2)}</h3>
                        <span>x{props.amount}</span>
                    </div>
                </div>
                <div className="add-remove">
                    <button onClick={()=> decrease(props.ids)} className='addMore btn'>-</button>
                    <button onClick={()=> increase(props.ids)} className='removeMore btn'>+</button>
                </div>
            </div>
        </>
    )
}

export default CartList