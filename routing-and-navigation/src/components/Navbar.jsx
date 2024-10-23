// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
