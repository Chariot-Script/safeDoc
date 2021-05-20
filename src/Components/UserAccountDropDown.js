import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Contexts/StateProvider'
import { auth } from "../Sevices/Firebase";
import { FaUserAlt, FaUserEdit, FaInbox, FaShoppingBasket, FaHeart } from "react-icons/fa"
import { RiLogoutCircleFill } from "react-icons/ri"

import './UserAccountDropDown.css'


function profileToggle() {
    const toogleMenu = document.querySelector(".menu")
    toogleMenu.classList.toggle("active")
}

function UserAccountDropDown() {
    const [{ user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            profileToggle()
        }
    };

    return (
        <div className="action">
            <div className="profile" onClick={profileToggle}>
                <img src={'../Images/james.png'} alt="" />
            </div>
            <div className="menu">
                <h3>{user ? user.displayName : "Hello Guest"}<br /><span>{user && user.email}</span></h3>
                <ul>
                    <li onClick={profileToggle}><FaUserAlt className='icon' /><Link to="/profile">Profile</Link></li>
                    <li onClick={profileToggle}><FaUserEdit className='icon' /><Link to="#">Edit Profile</Link></li>
                    <li onClick={profileToggle}><FaInbox className='icon' /><Link to="#">Inbox</Link></li>
                    <li onClick={profileToggle}><FaShoppingBasket className='icon' /><Link to="/order">Orders</Link></li>
                    <li onClick={profileToggle}><FaHeart className='icon' /><Link to="/favourite">Favourites</Link></li>
                    <li onClick={handleAuthentication}><RiLogoutCircleFill className='icon' /><Link to="#">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default UserAccountDropDown
