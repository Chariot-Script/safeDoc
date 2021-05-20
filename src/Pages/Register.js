import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Components/Footer'
import { auth } from '../Sevices/Firebase'
import { FaFacebookF, FaGoogle, FaUserAlt, FaLock } from "react-icons/fa"

import './Register.css';


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const register = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert('Passwords do not match')
        }
        try {
            setError('')
            auth.createUserWithEmailAndPassword(email, password)
            if (auth) {
                history.push("/profile");
            }
        } catch {
            error(alert(error.message))
        }
    }

    return (
        <div>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <Link to="/" className="nav__logo">SafeDoc</Link>
                </nav>
            </header>

            <div className="register__container">
                <div className="forms__container">
                    <div className="signin-signup">
                        <form onSubmit={register} className="sign-in-form">
                            <h2 className="register__title">Sign up</h2>
                            <div className="input-field">
                                <FaUserAlt />
                                <input type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Confirm Password" />
                            </div>
                            <button className="btn" id="sign-up-btn">
                                Sign up
                            </button>
                            <p className="social-text">Or Sign in with any of these social platforms</p>
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

                <div className="panels__container">
                    <div className="register__panel left__panel">
                        <div className="register__content">
                            <h3>One of us?</h3>
                            <p>
                                If you are one of us then I wonder what brought you here again.
                                Do you just like this page? Anyway we got you covered with
                                the button below. Hit it and get in
                            </p>
                            <Link to='/login'><button className="btn" id="sign-in-btn">
                                Login
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;
