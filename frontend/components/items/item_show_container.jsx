import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
    item: state.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);