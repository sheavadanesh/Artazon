import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0
        };

        this.emptyCart = this.emptyCart.bind(this);
        this.filledCart = this.filledCart.bind(this);
        this.updatedSubtotal = this.updatedSubtotal.bind(this);
    }

    updatedSubtotal(arr) {
        let newArr = [];
        arr.forEach(item => newArr.push(item.price));
        let total = newArr.reduce((a, b) => a + b, 0);
        return (
            (Math.round(total * 100) / 100).toFixed(2)
        )
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    componentDidUpdate(prevProps) {
        const prev = Object.values(prevProps.userCartItems);
        const current = Object.values(this.props.userCartItems);
        
        if (prev.length !== current.length) {
            this.props.fetchCartItems();
        }
    }

    filledCart() {
        let numItems = Object.values(this.props.userCartItems).length;
        let cartItemsArr = Object.keys(this.props.userCartItems);
        let actualItemsArr = Object.values(this.props.userCartItems);

        return (
            <div className='cart-container'>
                <header className='cart-head'>Shopping Cart</header>
                {/* <span className='price-header'>Price</span> */}
                <div className='left-side-cart'>
                    <ul className='cart_items'>
                        { cartItemsArr.map( cartItemId => (
                            <li className='cart-index-item' key={cartItemId}>
                                <div className='cart-photo-cont'>
                                    <img className='cart-index-item-photo' src={this.props.userCartItems[cartItemId].photoUrl}></img>
                                </div>
                                <div className='mid-side-specific'>
                                    <Link className='item-body' to={`/items/${this.props.userCartItems[cartItemId].id}`}>
                                        <span className='cart-item-title'>{this.props.userCartItems[cartItemId].title}</span>
                                    </Link>
                                    <span className='cart-item-artist'><span className='by'>by </span> {this.props.userCartItems[cartItemId].artist}</span>
                                    <span className='in-stock-cart'>In Stock</span>
                                    <span className='cart-free-ship-cap'>FREE Shipping & FREE Returns</span>
                                    <label className='gift'>
                                        <input type='checkbox' className='yes-gift'/><span className='gift-text'>This is a gift</span>
                                    </label>
                                    <div className='qty-delete-row'>
                                        {/* <select className='quantity-cart' value='Qty:'>
                                            <option value='1'>Qty: 1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                        </select> */}
                                        <button className='delete-cart-item' onClick={() => this.props.deleteCartItem(cartItemId)}>Delete</button>
                                    </div>
                                </div>
                                <div className='price-shennanigans'>
                                    <span className='cart-dollar-sign'>$</span><span className='cart-item-price'>{(Math.round(this.props.userCartItems[cartItemId].price * 100) / 100).toFixed(2)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='right-side-cart'>
                    <div className='subtotal-cont'>
                        <span>Subtotal ({numItems} items): <span className='cart-subtotal'>${this.updatedSubtotal(actualItemsArr)}</span></span>
                    </div>
                    <button className='proceed-to-checkout'>Proceed to checkout</button>
                    {/* <div className='checkout'>Thank you! Your order has been received.</div> */}
                </div>
            </div>
        )
    }

    emptyCart() {
        return (
            <div className='cart-container'>
                <span className='cart-head' id='empty-cart'>Shopping Cart</span>
                <br></br>
                <span className='empty-cart-message'>Your Shopping Cart is empty.</span>
            </div>
        )
    }

    render() {

        return Object.values(this.props.userCartItems).length === 0 ? this.emptyCart() : this.filledCart()

    }
}

export default CartItems;