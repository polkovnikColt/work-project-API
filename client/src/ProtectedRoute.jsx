import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import AdminPage from "./component/pages/admin/adminPages";

//TODO fix protected route
export default function ProtectedRoute({isAuth}) {
    return isAuth ?<Route component={AdminPage} path={'/admins'}/> : <Redirect to={'/'}/>;
}