import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import EditProfile from '../Components/EditProfile'
import { BiEnvelope, BiPhoneCall, BiMap, BiBuildings } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";

import './Profile.css'


function Profile() {

    return (
        <div>
            <Header />
            <EditProfile />
            <div className='profile__container'>
                <div className='left__side'>
                    <div className='profileText'>
                        <div className="imageBox">
                            <img alt='' src={'../Images/james.png'} />
                        </div>
                        <h2>Someone Special<br /><span>Web Developer</span></h2>
                    </div>
                    <div className='contactInfo'>
                        <ul>
                            <li>
                                <span className='icon'><BiPhoneCall /> </span>
                                <span className='text'>+256 123 456 789</span>
                            </li>
                            <li>
                                <span className='icon'><BiEnvelope /> </span>
                                <span className='text'>iam_special@email.com</span>
                            </li>
                            <li>
                                <span className='icon'><BiMap /> </span>
                                <span className='text'>Kireka, Kampala, Uganda</span>
                            </li>
                            <br />
                            <li>
                                <span className='icon'><BiBuildings /> </span>
                                <span className='text'>Chariot Script SMC LTD</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='right__side'>
                    <div className='about'>
                        <h2 className='title__about'>Personal Information<Link to='/edit/profile'><button className='btn'><FaUserEdit /> Edit Profile</button></Link></h2>
                        <div className='box'>
                            <div className='company_year'>
                                <h5>User ID</h5>
                                <h5>Gender</h5>
                                <h5>Date of Birth</h5>
                                <h5>Marital Status</h5>
                                <h5>Preferred Language</h5>
                            </div>
                            <div className='text'>
                                <p>SDU-CID-001-001</p>
                                <p>Male</p>
                                <p>30th April 1993</p>
                                <p>Single</p>
                                <p>English</p>
                            </div>
                        </div>
                    </div>
                    <div className='about'>
                        <h2 className='title__about'>Medical Information</h2>
                        <div className='box'>
                            <div className='company_year'>
                                <h5>Medical Conditions</h5>
                                <h5>Allergies</h5>
                                <h5>Blood Type</h5>
                            </div>
                            <div className='text'>
                                <p>Sickle Cell Anemia</p>
                                <p>None</p>
                                <p>A Negative</p>
                            </div>
                        </div>
                        {/* <div className='box'>
                            <div className='company_year'>
                                <h5>Current Medications</h5>
                            </div>
                            <div className='text'>
                                <h4>Hydroxyurea 500mg</h4>
                                <p>Last Refill : 30/04/2019</p>
                                <p>Number : 100</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='company_year'>
                            </div>
                            <div className='text'>
                                <h4>Folic Acid 10mg</h4>
                                <p>Last Refill : 30/04/2019</p>
                                <p>Number : 100</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
