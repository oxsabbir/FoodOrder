import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from './store/storeProvider'
import CartList from './CartList'
const Cart = function (props) {
    const contextData = useContext(StoreContext)
    const itemsList = contextData.items
    const itemIsEmpty = itemsList.length === 0

    let price = 0
    itemsList.forEach(item=> {
        price+= item.price
    })

    const modalHandler = function () {
        props.hideModal()
    }
    return (
        <>
            <div className="cartModal">
                <div className="modalContent">
                    <button onClick={modalHandler} className='close-modal'>x</button>
                    <ul style={{ listStyle: 'none' }}>
                        {itemIsEmpty && <h1>Cart Is Empty...</h1>}
                        {itemsList?.map(item => {
                            return <li key={item.id}>
                                <CartList
                                    name={item.name}
                                    price={item.price}
                                    amount={item.amount}
                                    ids={item.id}
                                />
                            </li>
                        })}
                    </ul>
                    {!itemIsEmpty && <div className="totalPrice">
                        <h2>Total : <span>${price.toFixed(2)}</span></h2>
                        <div className="orderMenu">
                            <button onClick={modalHandler} >Cancel</button>
                            <button>Order</button>
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default Cart