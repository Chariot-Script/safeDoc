import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FaFacebookF, FaGoogle, FaUserAlt, FaLock } from "react-icons/fa";

import './Login.css';


function Login() {
    return (
        <div>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <Link to="/" className="nav__logo">SafeDoc</Link>
                </nav>
            </header>

            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Login</h2>
                            <div className="input-field">
                                <FaUserAlt />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" placeholder="Password" />
                            </div>
                            <button className="btn" id="sign-up-btn">
                                Login
                            </button>
                            <p className="social-text">Or Login in with any of these social platforms</p>
                            <div className="social-media">
                                <Link to="#" className="social-icon">
                                    <FaFacebookF />
                                </Link>
                                <Link to="#" className="social-icon">
                                    <FaGoogle />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>
                                Welcome aboard! Hit the button below and lets set you up real quick
                            </p>
                            <Link to="/register"><button className="btn" id="sign-up-btn">
                                Sign up
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
