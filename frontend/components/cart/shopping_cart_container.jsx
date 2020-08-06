import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import { addToCart, removeItem, subQuantity, addQuantity } from '../../actions/cart_actions';

const mapStateToProps = state => {
    // debugger
    return {
        items: state.addedItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        removeItem: (item) => dispatch(removeItem(item)),
        subQuantity: (item) => dispatch(subQuantity(item)),
        addQuantity: (item) => dispatch(addQuantity(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);