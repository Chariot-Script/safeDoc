import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import './Landing.css'


function Landing() {
    return (
        <div>
            <Header />
            <main className="l-main">
                {/* ========== HOME ========== */}
                <section className="home" id="home">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                            <h2 className="home__subtitle">We are thinking,<br /> "Health First"</h2>
                            <p >It’s <b>easier</b> to <b>access</b> your
                                <b>doctor</b> or <b>medical</b> records this way and keep up with your
                                <b>medical health</b>. The worst case scenario is dying alone when
                                you can <b>access medical</b> attention right <b>where you are</b>.
                            </p>
                            <Link to="./register"><button className="btn">
                                Get Started
                            </button></Link>
                        </div>

                        <img src={'../Images/home.png'}  alt="home" className="home__img" />
                    </div>
                </section>

                {/* ========== ABOUT ========== */}
                <section className="about section bd-container" id="about">
                    <div className="about__container  bd-grid">
                        <div className="about__data">
                            <span className="section-subtitle about__initial">About us</span>
                            <h2 className="section-title about__initial">Your Doctor is, <br /> a Click away</h2>
                            <p className="about__description"><b>SafeDoc</b> is a system that allows you to
                                request for medical attention in case of an emergency. Medical
                                practitioners within your area can come in to help in a timely
                                manner other than waiting for hours to be attended to.<br /><br /> You can
                                also quickly chat with a Health Professional and ask questions
                                that will be answered in a timely manner. Video and Audio can
                                also be shared so as to get more relevant information. Users
                                create profiles and keep them updated so that medical practitioners can quickly get up to speed
                                with the Users’ details.
                            </p>
                        </div>

                        <img src={'../Images/about.jpg'} alt="" className="about__img" />
                    </div>
                </section>

                {/* ========== SERVICES ========== */}
                <section className="services section bd-container" id="services">
                    <span className="section-subtitle">Offering</span>
                    <h2 className="section-title">We aim to be <br />"SAFE"</h2>

                    <div className="services__container  bd-grid">
                        <div className="services__content">
                            <h3 className="services__title">Safe</h3>
                            <p className="services__description">“When a mouse laughs at a cat, there is a hole nearby.” –
                        <b><i>Nigerian Proverb</i></b></p>
                        </div>

                        <div className="services__content">
                            <h3 className="services__title">Accountable</h3>
                            <p className="services__description">“It is not only what we do, but also what we donnot do, for which
                        we are accountable.” – <b><i>Moliere</i></b></p>
                        </div>

                        <div className="services__content">
                            <h3 className="services__title">Fast</h3>
                            <p className="services__description">“Hold fast to dreams, For if dreams die, Life is like a
                        broken–winged bird that cannot fly.” – <b><i>Langston hughes</i></b></p>
                        </div>

                        <div className="services__content">
                            <h3 className="services__title">Excellent</h3>
                            <p className="services__description">“There is no passion to be found playing small – In settling for
                        less than the life you are capable of living.” – <b><i>Nelson Madiba Mandela</i></b></p>
                        </div>
                    </div>
                </section>

                {/* ===== APP ======= */}
                <section className="app section bd-container">
                    <div className="app__container bd-grid">
                        <div className="app__data">
                            <span className="section-subtitle app__initial">App</span>
                            <h2 className="section-title app__initial">App is comming soon</h2>
                            <p className="app__description">You will soon be able to find our application and download it, you'll
                        make reservations, orders, see your doctors on the way and much more.</p>
                            <div className="app__stores">
                                {/* <a href="#"><img src="assets/img/app1.png" alt="" className="app__store"></a>
                        <a href="#"><img src="assets/img/app2.png" alt="" className="app__store"></a> */}
                            </div>
                        </div>

                        <img src={'../Images/movil-app.png'} alt="" className="app__img" />
                    </div>
                </section>

                {/* ========== CONTACT US ========== */}
                <section className="contact section bd-container" id="contact">
                    <div className="contact__container bd-grid">
                        <div className="contact__data">
                            <span className="section-subtitle contact__initial">Let's talk</span>
                            <h2 className="section-title contact__initial">Contact us</h2>
                            <p className="contact__description">If you want a quick chat, contact us and we will attend you quickly,
                        with our 24/7 chat service.</p>
                        </div>

                        <div className="contact__button">
                            <Link to="./contact"><button className="btn">
                                Contact us now
                            </button></Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Landing
