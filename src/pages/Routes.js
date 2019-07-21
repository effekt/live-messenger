import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessagesPage from './Messages/MessagesPage';
import LoginPage from './Login/LoginPage';
import LogoutPage from './Logout/LogoutPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={MessagesPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
        </Switch>
    );
}

export default Routes;