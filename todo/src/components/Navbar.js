import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
        </div>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact>Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about">About</NavLink>
                </li>

            </ul>
        </nav>
    )
}