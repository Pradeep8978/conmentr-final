import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store/store'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        store.getState().users
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)