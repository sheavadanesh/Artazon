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
            <div className='item-show'>
                <div className='item-img-container'>
                    <div className='side-imgs'>

                    </div>
                    <span className='item-img'>
                        
                    </span>
                </div>
                <div className='item-text-container'>
                    <div className='item-title-header'>
                        <h1 className='item-title'>{item.title}</h1>
                    </div>
                    <label className='item-show-col1' id='price'>Price: <p className='price-num'>${item.price}</p></label>
                    <br></br>
                    <label className='item-show-col1'>Artist: <p>{item.artist}</p></label><label className='item-show-col2'>Year: <p>{item.year}</p></label>
                    <br></br>
                    <label className='item-show-col1'> Style: <p>{item.style}</p></label><label className='item-show-col2'>Type: <p>{item.media_type}</p></label>
                    <br></br>
                    <label className='item-show-col1'>Description: <p>{item.description}</p></label>
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