import './MenuList.css'
import { useRef } from 'react'
import DUMMY_DATA from '../assets/DUMMY_DATA'
import { cartActions } from '../store/storeIndex'
import { useDispatch } from 'react-redux'

const MenuList = function (props) {
    const dispatch = useDispatch()
    const amountInput = useRef()
    const data = DUMMY_DATA()

    const addToCartHandler = function (event) {
        const id = +event.target.id
        const amount = +amountInput.current.value
        const selectedItem = data.find(item=> item.id === id)


        // addItem(selectedItem,amount)
        dispatch(cartActions.addToCart({selectedItem,amount,id}))

        // clearing Input 
        amountInput.current.value = 1
    }

    return (
        <>
                <li>
                    <div className="menu-list">
                        <div className="menu-details">
                            <h2>{props.name}</h2>
                            <p>{props.details}</p>
                            <h3>${props.price}</h3>
                        </div>
                        <div className="menu-add">
                            <label htmlFor="count">Amount</label>
                            <input ref={amountInput} type="number" min={1} max={20} defaultValue={1} /> <br />
                            <button id={props.keys} onClick={addToCartHandler} >+Add</button>
                        </div>
                    </div>
                </li>
        </>
    )
}

export default MenuList