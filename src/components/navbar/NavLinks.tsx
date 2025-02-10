// src/components/Navbar/NavLinks.tsx
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAuth } from '../../AuthContext';

const NavLinks: React.FC = () => {
  const { isLoggedIn } = useAuth();

    return (
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li>
                {isLoggedIn ? <UserMenu /> : <Link to="/login">Login</Link>}
            </li>
        </ul>
    );
};

export default NavLinks;
