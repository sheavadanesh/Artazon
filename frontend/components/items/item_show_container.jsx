import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';
import { createCartItem } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.entities.items[ownProps.match.params.itemId],
        userCartItems: state.entities.cartItems,
        sessionId: state.session.id
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItem: () => dispatch(fetchItem(ownProps.match.params.itemId)),
        createCartItem: (item) => dispatch(createCartItem(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);