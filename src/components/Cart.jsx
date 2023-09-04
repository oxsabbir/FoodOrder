import './Cart.css'
import CartList from './CartList'
import { useSelector } from 'react-redux'

const Cart = function (props) {
    const itemsList = useSelector(state=> state.cart.items)
    console.log(itemsList)
    const itemIsEmpty = itemsList.length === 0

    let price = 0
    itemsList.forEach(item => {
        price += item.price
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
                        {itemIsEmpty && 
                            <div className="emptyMsg">
                                <h1>Cart Is Empty...</h1>
                            </div>
                        }
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