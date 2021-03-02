import "../styles/navbar.css";

import React from "react";
import { NavLink } from "react-router-dom";

//import history from "./history";

const Header = () => {
    const logout = () => {
        //sessionStorage.removeItem("token");
        sessionStorage.clear();
        //localStorage.removeItem("password");
        //localStorage.removeItem("email");
        //localStorage.removeItem("remember");
        localStorage.clear();
        sessionStorage.removeItem("token");
        window.location.reload(false);
        /*setTimeout(() => {
            history.replace("/");
        }, 200);*/
    };
    return (
        <React.Fragment>
            <div className="navbar">
                <h2>Todo List</h2>
                <NavLink
                    to="/"
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/todoList"
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Tâches
                </NavLink>
                <NavLink
                    to="/logout"
                    onClick={logout}
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Déconnexion
                </NavLink>
            </div>
        </React.Fragment>
    );
};

export default Header;
