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
        return (
            <div className='show'>
                <div className='item-show'>
                    <div className='item-img-container'>
                        <div className='side-imgs'>

                        </div>
                        <span className='item-img'>
                            <img className='item-photo'src={item.photoUrl}></img>
                        </span>
                    </div>
                    <div className='item-text-container'>
                        <div className='item-title-header'>
                            <h1 className='item-title'>{item.title}</h1>
                            <span className='line-break-title'></span>
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
                            <label className='item-show-col1'>Year:<span>  {item.year}</span></label>
                            <br></br>
                            <label className='item-show-col1'> Style:<span>  {item.style}</span></label>
                            <br></br>
                            <label className='item-show-col1'>Type:<span>  {item.media_type}</span></label>
                            <br></br>
                            <label className='item-show-col1' id='about'>About this item
                                <br></br>
                                <span id='description'>{item.description}</span>
                            </label>
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
                        <button className='quantity-button'>Qty: 1</button>
                        <br></br>
                        <button className='add-to-cart'><img className='cart-logo' src='/assets/cart-logo.png'></img> Add to Cart</button>
                        <br></br>
                        <button className='buy-now'><img className='buy-now-logo' src='/assets/buy-now-logo.png'></img>Buy Now</button>
                    </div>
                </div>
                <footer className='customer-reviews'>
                    <label className='review-heading'>Customer reviews</label>
                </footer>
            </div>
        )
    };
};

export default ItemShow;