import React from 'react';
// import { Link } from 'react-router-dom';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <div className='item-show'>
                <div className='item-img-container'>
                    <div className='side-imgs'>

                    </div>
                    <span className='item-img'>
                        
                    </span>
                </div>
                debugger
                <div className='item-text-container'>
                    <h1 className='item-title'>{item.title}</h1>
                    <p className='item-show-col1'>Artist: {item.artist}</p><p className='item-show-col2'>Year: {item.year}</p>
                    <p className='item-show-col1'> Style: {item.style}</p><p className='item-show-col2'>Type: {item.media_type}</p>
                    <p className='item-show-col1'>Price: {item.price}</p>
                    <p className='item-show-col1'>Description: {item.description}</p>
                </div>
                <div className='item-show-cart-container'>
                    shopping cart goes here
                </div>
                <div className='customer-reviews'>
                    customer reviews go here
                </div>
            </div>
        )
    };
};

export default ItemShow;