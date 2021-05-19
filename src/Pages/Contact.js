import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FaUserAlt, FaPhone, FaEnvelope, FaFile } from "react-icons/fa";


function Contact() {
    return (
        <div>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <Link to="/" className="nav__logo">SafeDoc</Link>
                </nav>
            </header>

            <div className="register__container">
                <div className="forms_container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2>Contact us</h2>
                            <div className="input-field">
                                <FaUserAlt />
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input-field">
                                <FaEnvelope />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <FaPhone />
                                <input type="text" placeholder="Phone number" />
                            </div>
                            <div className="input-field">
                                <FaFile />
                                <input type="text" placeholder="Message" />
                            </div>
                            <button className="btn" id="sign-up-btn">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="panels__container">
                    <div className="register__panel left__panel">
                        <div className="register__content">
                            <h3>Let's get in touch</h3>
                            <p>
                                "Examine what is said, not him who speaks and Just
                                because the Lizard nods it’s head doesn't mean it’s
                                in agreement" – <b><i>African Proverb</i></b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
