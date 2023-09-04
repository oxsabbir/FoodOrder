import { useDispatch } from "react-redux"
import { cartActions } from "../store/storeIndex"


const CartList = function (props) {
    const dispatch = useDispatch()
    const increaseHandler = function() {
        dispatch(cartActions.increament({id : props.ids}))
    }
    const decreaseHandler = function() {
        dispatch(cartActions.decreament({id : props.ids}))
    }
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
                    <button onClick={decreaseHandler} className='addMore btn'>-</button>
                    <button onClick={increaseHandler} className='removeMore btn'>+</button>
                </div>
            </div>
        </>
    )
}

export default CartList