import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../Contexts/StateProvider'
import { auth } from "../Sevices/Firebase";
import { FaUserAlt, FaMoneyCheck, FaShoppingBasket } from "react-icons/fa"
import { RiLogoutCircleFill } from "react-icons/ri"

import './UserAccountDropDown.css'


function profileToggle() {
    const toogleMenu = document.querySelector(".menu")
    toogleMenu.classList.toggle("active")
}

function UserAccountDropDown() {
    const history = useHistory();
    const [{ user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            profileToggle()
            history.push("/");
        }
    };

    return (
        <div className="action">
            <div className="profile" onMouseOver={profileToggle}>
                <img src={user ? user.photoURL : '../Images/user.png'} alt="" />
            </div>
            <div className="menu">
                <h3>{user ? !user.displayName : 'Hello Stranger'}<br /><span>{user && user.email}</span></h3>
                <ul>
                    <li onClick={profileToggle}><FaUserAlt className='icon' /><Link to="/profile">Profile</Link></li>
                    <li onClick={profileToggle}><FaMoneyCheck className='icon' /><Link to="/checkout">Checkout</Link></li>
                    <li onClick={profileToggle}><FaShoppingBasket className='icon' /><Link to="/order">Orders</Link></li>
                    <li onClick={handleAuthentication}><RiLogoutCircleFill className='icon' /><Link to="#">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default UserAccountDropDown
