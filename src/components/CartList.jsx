const CartList = function (props) {
    return (
        <>
            <div className="itemList">
                <div className="price-details">
                    <h2>{props.name}</h2>
                    <div className="prices">
                        <h3>{props.price}</h3>
                        <span>x{props.amount}</span>
                    </div>
                </div>
                <div className="add-remove">
                    <button className='addMore btn'>-</button>
                    <button className='removeMore btn'>+</button>
                </div>
            </div>
        </>
    )
}

export default CartList