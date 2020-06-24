import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Sign-In</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>Sign-In</button>
    ),
    closeModal: () => dispatch(closeModal()),
    dispatchedClearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);