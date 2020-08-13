import React from 'react';

class CartItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

    }

    filledCart() {
        return (
            <div className='cart-container'>
                <span className='cart-head'>Shopping Cart</span>
                <div className='cart_items_cont'>
                    <ul className='cart_items'>

                    </ul>
                </div>
            </div>
        )
    }

    emptyCart() {
        return (
            <div className='cart-container'>
                <span className='cart-head'>Shopping Cart</span>
                <br></br>
                <span className='cart-head' id='empty-cart'>Your Shopping Cart is empty.</span>
            </div>
        )
    }

    render() {

        return this.emptyCart();

    }
}

export default CartItems;