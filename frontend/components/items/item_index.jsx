import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { items } = this.props;
        if (items.length === 0) {
            return (
                <div className='no-match'>
                    <span className='no-match-message'>
                        Your search did not match any products.
                    </span>
                    <span className='try-searching'>
                        Try checking your spelling or use more general terms.
                    </span>
                </div>
            )
        } else {
            return (
                <div className='item-index'>
                    <span className='all-items-head'>All items</span>
                    <ul className='item-listing'>
                        {items.map(item => <ItemIndexItem key={item.id} item={item}/>)}
                    </ul>
                </div>
            );
        }
    }
}

export default ItemIndex;
