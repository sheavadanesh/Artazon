import React from 'react';
import { Route } from 'react-router-dom';
import ItemIndexItem from './item_index_item';
import ItemIndexContainer from './item_index_container';

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
                {/* <Route exact path="/items" component={ItemIndexContainer} /> */}
                <ul className='item-listing'>
                    {items.map(item => <ItemIndexItem key={item.id} item={item}/>)}
                </ul>
            </div>
        );
    }
}

export default ItemIndex;
