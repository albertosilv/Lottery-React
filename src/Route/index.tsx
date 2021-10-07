import React from 'react'
import {
    Switch,
} from "react-router-dom";
import Game from '../Pages/Game';
import Login from '../Pages/Login';
import RecentGames from '../Pages/RecentGames';
import Registration from '../Pages/Registration';
import Route from './Wrapper'
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import Account from '../Pages/EditUser';
function Router() {
    return (
            <Switch>
                <Route component={Login} exact path='/' redirectTo="/RecentGames" isPrivate={false}/>
                <Route component={RecentGames} exact path='/RecentGames' redirectTo="/" isPrivate={true}/>
                <Route component={Registration} exact path='/Registration' redirectTo="/RecentGames" isPrivate={false}/>
                <Route component={Game} exact path='/game' redirectTo="/" isPrivate={true}/>
                <Route component={Account} exact path='/account' redirectTo="/" isPrivate={true}/>
                <Route component={ResetPassword} exact path='/resetPassword' redirectTo="/RecentGames" isPrivate={false}/>
                <Route component={ForgotPassword} exact path='/forgotPassword' redirectTo="/RecentGames" isPrivate={false}/>
            </Switch>
    )
}

export default Router;
