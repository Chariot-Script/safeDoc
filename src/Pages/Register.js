import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useAuth } from '../Contexts/AuthContext';
import { FaFacebookF, FaGoogle, FaUserAlt, FaLock } from "react-icons/fa";

import './Register.css';


function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confrimPasswordlRef = useRef()
    const { register, currentUser } = useAuth
    const [ error, setError ] = useState('')
    // const [ success, setSuccess ] = useState('')
    const [ loading, setLoading ] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confrimPasswordlRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value)
            // setSuccess('Account created successfully')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

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
                        {currentUser && console.log(currentUser.email)}
                        {error && console.log(error)}
                        {/* {success && console.log(success)} */}
                        <form onSubmit={handleSubmit} className="sign-in-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <FaUserAlt />
                                <input type="email" ref={emailRef} required placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" ref={passwordRef} required placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <FaLock />
                                <input type="password" ref={confrimPasswordlRef} required placeholder="Confirm Password" />
                            </div>
                            <button disabled={loading} className="btn" id="sign-up-btn">
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

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>
                                If you are one of us then I wonder what brought you here again.
                                Do you just like this page? Anyway we got you covered with
                                the button below. Hit it and get in
                            </p>
                            <Link to='/login'><button className="btn transparent" id="sign-in-btn">
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
