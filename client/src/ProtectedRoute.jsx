import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import AdminPage from "./component/pages/admin/adminPages";
import MainPage from "./component/pages/main/mainPage";

export default function ProtectedRoute({isAuth}) {
    return isAuth ?<Route component={AdminPage} path={'/admins'}/> : <Redirect to={'/'}/>;
}