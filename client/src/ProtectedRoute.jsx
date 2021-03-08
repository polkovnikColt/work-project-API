import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function ProtectedRoute({isAuth,component,path}) {
    return isAuth ? <Route component={component} path={path}/> : <Redirect to={'/'}/>;
}