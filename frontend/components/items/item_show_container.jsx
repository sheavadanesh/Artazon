import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.entities.items[ownProps.match.params.itemId]
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItem: () => dispatch(fetchItem(ownProps.match.params.itemId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);