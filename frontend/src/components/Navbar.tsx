import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Resident Portal</div>
            <Link to="/">Home</Link>
            <div className="navbar_spacer"></div>
            <Link to="/admin">Admin</Link>
        </div>
    );
};

export default Navbar;
