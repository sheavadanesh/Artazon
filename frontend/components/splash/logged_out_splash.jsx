import React from 'react';
import { Redirect } from 'react-router-dom';

const LoggedOutSplash = props => {
    <Redirect to='/items/' />
}

export default LoggedOutSplash;