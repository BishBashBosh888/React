// src/components/Navbar/UserMenu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const UserMenu: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { logout } = useAuth();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
      logout();
      // Optionally, you can navigate to the home page or login page after logout
      // navigate('/login'); // Uncomment if you want to redirect after logout
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="profile-link">
                User Profile
            </button>
            {isDropdownOpen && (
                <ul className="dropdown-menu">
                    <li><Link to="/profile">View Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            )}
        </div>
    );
};

export default UserMenu;
