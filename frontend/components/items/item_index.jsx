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

export default ItemIndex;
