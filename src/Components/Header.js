import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from "../Contexts/StateProvider";
import UserAccountDropDown from '../Components/UserAccountDropDown'
import { FaShoppingCart } from 'react-icons/fa'

import './Header.css';


function Header() {
    const [{ user, basket }] = useStateValue();

    return (
        <header className="l-header" id="header">
            <nav-line className="nav-line bd-container">
            </nav-line>
            <nav className="nav bd-container">
                <Link to="/" className="nav__logo">SafeDoc</Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        {user && <li><Link to="/request/doctor" className="nav__item nav__link">Doctors</Link></li>}
                        {user && <li><Link to="/pharmacy" className="nav__item nav__link">Pharmacy</Link></li>}
                        {!user && <li><Link to="/contact" className="nav__item nav__link">Contact us</Link></li>}
                        {!user && <li><Link to="/login" className="nav__item nav__link">Login</Link></li>}
                        {!user && <li><Link to="/register" className="nav__item nav__link">Sign up</Link></li>}
                        {user && <li><Link to="/checkout" className='nav__item nav__link' ><FaShoppingCart /> {basket?.length}</Link></li>}
                    </ul>
                    {user && <UserAccountDropDown />}
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
