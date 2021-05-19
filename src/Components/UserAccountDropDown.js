import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaUserEdit, FaInbox, FaShoppingBasket, FaHeart } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { RiLogoutCircleFill } from "react-icons/ri";

import './UserAccountDropDown.css'


function profileToggle() {
    const toogleMenu = document.querySelector(".menu")
    toogleMenu.classList.toggle("active")
}

function UserAccountDropDown() {
    return (
        <div class="action">
            <div class="profile" onClick={profileToggle}>
                <img src={'../Images/james.png'} alt="" />
            </div>
            <div class="menu">
                <h3>Someone<br /><span>iam_special@email.com</span></h3>
                <ul>
                    <li onClick={profileToggle}><FaUserAlt className='icon' /><Link to="/profile">Profile</Link></li>
                    <li onClick={profileToggle}><FaUserEdit className='icon' /><Link to="#">Edit Profile</Link></li>
                    <li onClick={profileToggle}><FaInbox className='icon' /><Link to="#">Inbox</Link></li>
                    <li onClick={profileToggle}><FaShoppingBasket className='icon' /><Link to="/order">Orders</Link></li>
                    <li onClick={profileToggle}><FaHeart className='icon' /><Link to="/favourite">Favourites</Link></li>
                    <li onClick={profileToggle}><MdSettings className='icon' /><Link to="#">Settings</Link></li>
                    <li onClick={profileToggle}><RiLogoutCircleFill className='icon' /><Link to="#">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default UserAccountDropDown
