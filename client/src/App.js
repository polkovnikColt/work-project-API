import React from "react";
import MainPage from './component/pages/main/mainPage';
import {HashRouter, Switch, Route} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import LeftSidebar from "./component/sidebars/leftSidebar";


function App() {
    return (
        <div className="container-fluid p-0">
        <HashRouter>
            <Navbar/>
                <div className="row">
                    <LeftSidebar/>
                    <Switch>
                        <Route path={'/'} component={MainPage} exact = {true}/>
                        <Route path={'/news'} component={null}/>
                        <Route path={'/about'} component={null}/>
                        <Route path={'/contact'} component={null}/>
                        <Route path={'/world'} component={null}/>
                        <Route path={'/seminars'} component={null}/>
                    </Switch>
                </div>
        </HashRouter>
        </div>
    );
}

export default App;
