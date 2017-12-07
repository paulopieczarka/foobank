import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

import 'element-theme-default';
import "../styles/ElementAphroditeTheme.css";

import "../styles/App.css";

const Auth =
{
    isAuthenticated: sessionStorage.getItem("bank"),
    async authenticated()
    {
        await (this.isAuthenticated = false);
    }
}

class App extends Component
{
    render()
    {
        return <Router>
            <div className="app">
                <Route path="/login" component={Login} auth={Auth} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/" component={Home} />
            </div>
        </Router>;
    }
}

const exceptRoutes = ["/login", "/register"];
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.isAuthenticated ? (
            <Component {...props} />
        ) : (
            (!exceptRoutes.includes(window.location.pathname)) && <Redirect to={{ pathname: "/login" }} />
        )
    )} />
);

export default App;