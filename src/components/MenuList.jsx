import './MenuList.css'
import { useRef } from 'react'
import { StoreContext } from './store/storeProvider'
import DUMMY_DATA from '../assets/DUMMY_DATA'
import { useContext } from 'react'


const MenuList = function (props) {
    const amountInput = useRef()
    const data = DUMMY_DATA()

    const {addItem} = useContext(StoreContext)

    const addToCartHandler = function (event) {
        const id = +event.target.id
        const amount = amountInput.current.value
        const selectedItem = data.find(item=> item.id === id)
        
        addItem(selectedItem,amount)
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
                            <input ref={amountInput} type="number" min={1} max={5} defaultValue={1} /> <br />
                            <button id={props.keys} onClick={addToCartHandler} >+Add</button>
                        </div>
                    </div>
                </li>
        </>
    )
}

export default MenuList