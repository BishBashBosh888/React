// src/components/Navbar/NavLinks.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => {
    return (
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
    );
};

export default NavLinks;
