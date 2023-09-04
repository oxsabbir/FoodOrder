import './Header.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const Header = function () {
    const totalAmount = useSelector(state=> state.cart.totalAmount)
    
    const [cartIsShown, setCartIsShown] = useState(false)
    const hideModal = function () {
        setCartIsShown(false)
    }
    return (
        <>
            <header>
                <h1>React Meals</h1>
                <div onClick={()=> setCartIsShown(true)} className="cart">
                    <h3>Your Cart <span>{totalAmount}</span></h3>
                </div>
            </header>
            {cartIsShown && <Cart hideModal={hideModal} />}
        </>
    )
}

export default Header