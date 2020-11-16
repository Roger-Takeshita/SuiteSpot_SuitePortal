import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { connect } from 'react-redux';
import * as type from './utils/types/types';

const App: React.FC<type.AppProps> = ({ user }) => {
    const route =
        user && user.email ? (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/admin" component={LoginPage} />
                <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
        ) : (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/admin" component={LoginPage} />
                <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
        );

    return (
        <div className="app">
            <Navbar />
            {route}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    user: state.user,
});

export default connect(mapStateToProps)(App);
