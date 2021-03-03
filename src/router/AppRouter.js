import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Logout from "../components/Logout";
import useToken from "../components/useToken";

const AppRouter = () => {
    const { token, setToken } = useToken();
    if (!token) {
        return <Login setToken={setToken} />;
    }
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/todoList" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
