import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} exact={true} />
                    <Route path="/todoList" component={App} />
                    <Route path="/auth" component={PageNotFound} />
                    <Route path="/pageNotFound" component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
