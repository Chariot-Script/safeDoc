import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className="l-header" id="header">
            <nav-line className="nav-line bd-container">
            </nav-line>
            <nav className="nav bd-container">
                <Link to="/" className="nav__logo">SafeDoc</Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                    <li><Link to="/pharmacy" className="nav__item nav__link">Pharmacy</Link></li>
                    <li><Link to="/contact" className="nav__item nav__link">Contact us</Link></li>
                        <li><Link to="/login" className="nav__item nav__link">Login</Link></li>
                        <li><Link to="/register" className="nav__item nav__link">Sign up</Link></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
