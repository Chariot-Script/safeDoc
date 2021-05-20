import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Components/Footer';
import { auth } from '../Sevices/Firebase'
import { FaFacebookF, FaGoogle, FaUserAlt, FaLock } from "react-icons/fa";

import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/pharmacy");
                }
            })
            .catch((error) => alert(error.message));
    }


    return (
        <div>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <Link to="/" className="nav__logo">SafeDoc</Link>
                </nav>
            </header>

            <div className="login__container">
                <div className="forms__container">
                    <div className="signin-signup">
                        <form onSubmit={login} className="sign-in-form">
                            <h2 className="login__title">Login</h2>
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

                <div className="panels__container">
                    <div className="login__panel left__panel">
                        <div className="login__content">
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
