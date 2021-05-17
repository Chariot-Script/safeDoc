import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { FaUserAlt } from "react-icons/fa";


import './Pharmacy.css'


function Pharmacy() {
    return (
        <div>
            <Header />
            <div className='slider'>
                <input type='radio' name='slider' checked='checked' />
                <div className='imageBox'>
                    <img src={'../Images/slider1.jpg'} alt='slider' />
                    <div className='content' >
                        <h2>Slider One</h2>
                        <p>
                            If you are one of us then I wonder what brought you here again.
                            Do you just like this page? Anyway we got you covered with
                            the button below. Hit it and get in
                        </p>
                        <Link to='#'>
                            <button className="btn" id="sign-in-btn">
                                Order now
                            </button>
                        </Link>
                    </div>
                </div>
                <input type='radio' name='slider' />
                <div className='imageBox'>
                    <img src={'../Images/slider2.jpg'} alt='slider' />
                    <div className='content' >
                        <h2>Slider Two</h2>
                        <p>
                            If you are one of us then I wonder what brought you here again.
                            Do you just like this page? Anyway we got you covered with
                            the button below. Hit it and get in
                        </p>
                        <Link to='#'>
                            <button className="btn" id="sign-in-btn">
                                Order now
                            </button>
                        </Link>
                    </div>
                </div>
                <input type='radio' name='slider' />
                <div className='imageBox'>
                    <img src={'../Images/slider3.jpg'} alt='slider' />
                    <div className='content' >
                        <h2>Slider Three</h2>
                        <p>
                            If you are one of us then I wonder what brought you here again.
                            Do you just like this page? Anyway we got you covered with
                            the button below. Hit it and get in
                        </p>
                        <Link to='#'>
                            <button className="btn" id="sign-in-btn">
                                Order now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ========== FEATURED PRODUCTS ========== */}
            <section className="services section bd-container" id="services">
                <br />
                <br />
                <span className="section-subtitle">Special</span>
                <h2 className="section-title">Featured Products</h2>

                <div className="services__container  bd-grid">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            {/* ========== NEWS LETTER ========== */}
            <section className="contact section bd-container" id="contact">
                <div className="contact__container bd-grid">
                    <div className="contact__data">
                        <span className="section-subtitle contact__initial">Join our mailing list</span>
                        <h2 className="section-title contact__initial">News Letter</h2>
                        <p className="contact__description">If you want a quick chat, contact us and we will attend you quickly,
                        with our 24/7 chat service.</p>
                    </div>


                    <div className="contact__button">
                        <div className="input-field">
                            <FaUserAlt />
                            <input type="email" placeholder="Email" />
                        </div>

                        <Link to="./contact"><button className="btn">
                            Subscribe
                            </button></Link>
                    </div>
                </div>
            </section>

            {/* ========== ALL PRODUCTS ========== */}
            <section className="services section bd-container" id="services">
                <span className="section-subtitle">Shop</span>
                <h2 className="section-title">All Products</h2>

                <div className="services__container  bd-grid">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="services__container  bd-grid">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            {/* ========== ABOUT SHOP ========== */}
            <section className="services section bd-container services__content" id="services">
                <span className="section-subtitle">About</span>
                <h2 className="section-title">Pharmacy</h2>
                The greatest ethical imperative for the physician is the welfare of the patient.
                If you are one of us then I wonder what brought you here again.
                Do you just like this page? Anyway we got you covered with
                the button below. Hit it and get in
            </section>
            <Footer />
        </div>
    )
}

export default Pharmacy
