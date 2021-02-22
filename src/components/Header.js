import "../styles/navbar.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <h2>Todo List</h2>
                <NavLink
                    to="/home"
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
                    to="/auth"
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
