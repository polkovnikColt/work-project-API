import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import "../src/component/mainStyles.scss"
import NavigationBar from "./component/navbar/Navbar";
import LeftSidebar from "./component/sidebars/LeftSidebar";
import MainPage from './component/pages/main/MainPage';
import NewsPage from "./component/pages/news/NewsPage";
import AboutPage from "./component/pages/about/AboutPage";
import ProtectedRoute from "./ProtectedRoute";
import ConferencePage from "./component/pages/conference/ConferencePage";
import SouvenirsPage from "./component/pages/souvenirs/SouvenirsPage";
import AdminPage from "./component/pages/admin/AdminPages";

function App() {

    return (
        <div className="container-fluid w-100 p-0 ">
        <HashRouter>
            <NavigationBar/>
                <div className="row w-100 m-0 ">
                    <LeftSidebar/>
                    <Switch>
                        <Route path={'/'} component={MainPage} exact = {true}/>
                        <Route path={'/news'} component={NewsPage}/>
                        <Route path={'/about'} component={AboutPage}/>
                        <Route path={'/world'} component={null}/>
                        <Route path={'/conference'} component={ConferencePage}/>
                        <Route path={'/souvenirs'} component={SouvenirsPage}/>
                        <ProtectedRoute
                            path = {'/admins'}
                            component={AdminPage}
                            isAuth={false}/>
                    </Switch>
                </div>
        </HashRouter>
        </div>
    );
}

export default App;
