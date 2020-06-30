import { connect } from 'react-redux';
import ItemIndex from './item_index';
import { fetchItems } from '../../actions/item_actions';
import { selectItems } from '../../reducers/selectors';

const mapStateToProps = state => ({
    items: selectItems(state) 
});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);