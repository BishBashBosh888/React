// src/components/Navbar/Navbar.tsx
import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Goblins' Amory</Link>
            </div>
            <NavLinks />
        </nav>
    );
};

export default Navbar;
