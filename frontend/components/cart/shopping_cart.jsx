import React from 'react';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleRemove = this.handleRemove.bind(this)
        this.handleAddQuantity = this.handleAddQuantity.bind(this)
        this.handleSubQuantity = this.handleSubQuantity.bind(this)
    }

    handleRemove(id) {
        this.props.removeItem(id);
    }

    handleAddQuantity(id) {
        this.props.addQuantity(id);
    }

    handleSubQuantity(id) {
        this.props.subQuantity(id);
    }

    render() {
        // let addedItems = this.props.items.length ? (
        //     <span className='cart-head'>Your Shopping Cart</span>
        //     <ul className='cart_items'>
        //         {this.props.items.map(item => <ItemIndexItem key={item.id} item={item} />)}
        //     </ul>
        // ) : (
        //     <span className='empty-cart-message'>Your cart is empty.</span>
        // )
        let addedItems = this.props.addedItems;
        return (
            <div className='cart-container'>
                <span className='cart-head'>Your Shopping Cart</span>
                <div className='cart_items_cont'>
                    <ul className='cart_items'>
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;