import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem, fetchItems } from '../../actions/item_actions';
import { createCartItem } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.entities.items[ownProps.match.params.itemId],
        userCartItems: state.entities.cartItems,
        sessionId: state.session.id,
        matchedId: ownProps.match.params.itemId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItem: (matchedId) => dispatch(fetchItem(matchedId)),
        fetchItems: () => dispatch(fetchItems()),
        createCartItem: (item) => dispatch(createCartItem(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);