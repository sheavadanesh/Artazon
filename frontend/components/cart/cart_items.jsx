import React from 'react';

class CartItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0
        };

        this.emptyCart = this.emptyCart.bind(this);
        this.filledCart = this.filledCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    filledCart() {
        let numItems = Object.values(this.props.userCartItems).length;
        return (
            <div className='cart-container'>
                <span className='cart-head'>Shopping Cart</span>
                <div className='cart_items_cont'>
                    <ul className='cart_items'>

                    </ul>
                </div>
                <div className='subtotal-cont'>
                    <span>Subtotal ({numItems} items): <span className='cart-subtotal'>${this.state.subtotal}</span></span>
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

        return Object.values(this.props.userCartItems).length === 0 ? this.emptyCart() : this.filledCart()

    }
}

export default CartItems;