import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav)=> (nav.isActive ? "nav-active" : "")} >
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/ordonances" className={(nav)=> (nav.isActive ? "nav-active" : "")} >
                    <li>Ordonances</li>
                </NavLink>
                <NavLink to="/history" className={(nav)=> (nav.isActive ? "nav-active" : "")} >
                    <li>Historique</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;