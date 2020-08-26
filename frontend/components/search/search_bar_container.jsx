import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchItems } from '../../actions/item_actions';

const mapStateToProps = state => {
    return {
        items: state.entities.items
    }
};

const mapDisptachToProps = dispatch => {
    return {
        fetchItems: (data) => dispatch(fetchItems(data))
    }
};

export default connect(mapStateToProps, mapDisptachToProps)(SearchBar);