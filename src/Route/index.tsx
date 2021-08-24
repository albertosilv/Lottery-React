import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Game from '../Pages/Game';
import Login from '../Pages/Login';
import RecentGames from '../Pages/RecentGames';
import Registration from '../Pages/Registration';
import ResetPassword from '../Pages/ResetPassword';
function Router() {
    return (
            <Switch>
                <Route component={Login} exact path='/' />
                <Route component={RecentGames} path='/RecentGames' />
                <Route component={Registration} path='/Registration' />
                <Route component={ResetPassword} path='/ResetPassword' />
                <Route component={Game} path='/Game' />
            </Switch>
    )
}

export default Router;
