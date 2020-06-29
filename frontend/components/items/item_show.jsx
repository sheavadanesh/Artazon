import React from 'react';
// import { Link } from 'react-router-dom';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchItem()
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.itemId !== this.props.match.params.itemId) {
            this.props.fetchItem();
        }
    };

    render() {
        const { item } = this.props;
        if (item === undefined) return null;
        console.log(item);
        return (
            <div className='item-show'>
                <div className='item-img-container'>
                    <div className='side-imgs'>

                    </div>
                    <span className='item-img'>
                        <img src={item.photoUrl}></img>
                    </span>
                </div>
                <div className='item-text-container'>
                    <div className='item-title-header'>
                        <h1 className='item-title'>{item.title}</h1>
                    </div>
                    <span className='rating-preview'>
                        rating
                    </span>
                    <label className='price'>Price:  
                        <span className='price-num'>  ${item.price}<span className='free-ship' id='mid-text'> & FREE Shipping.</span></span>
                    </label>
                    <div className='show-col1'>
                        <label className='item-show-col1'>Artist:<span>  {item.artist}</span></label>
                        <br></br>
                        <label className='item-show-col1'> Style:<span>  {item.style}</span></label>
                        <br></br>
                        <label className='item-show-col1' id='about'>About this item
                            <br></br>
                            <span id='description'>{item.description}</span>
                        </label>
                    </div>
                    <div className='show-col2'>
                        <label className='item-show-col2'>Year:  <span>  {item.year}</span></label>
                        <br></br>
                        <label className='item-show-col2'>Type:  <span>  {item.media_type}</span></label>
                    </div>
                    <span className='line-break-about'></span>
                </div>
                <div className='item-show-cart-container'>
                    <span className='price-num' id='side-cont'>${item.price}</span>
                    <br></br>
                    <span className='free-ship' id='cart-text'> & FREE Shipping.</span>
                    <br></br>
                    <span className='in-stock'>In Stock.</span>
                    <br></br>
                    <div className='quantity-dropdown'>

                    </div>
                    <br></br>
                    <button>Add to Cart</button>
                    <br></br>
                    <button>Buy Now</button>
                </div>
                <div className='customer-reviews'>
                    customer reviews go here
                </div>
            </div>
        )
    };
};

export default ItemShow;