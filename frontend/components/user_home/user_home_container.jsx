import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserHome from './user_home';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
