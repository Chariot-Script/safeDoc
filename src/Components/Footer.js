import React from 'react';
import { Link } from 'react-router-dom';
import { BiMap, BiEnvelope, BiPhoneCall } from "react-icons/bi";

import './Footer.css';


function Footer() {
    return (
        <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <Link to="/" className="footer__logo">SafeDoc</Link>
                    <span className="footer__description">We are thinking "Health".</span>
                    <span className="footer__description">Trading Under: <br />
                        <b>CHARIOT SCRIPT UGANDA - SMC LTD.</b></span>
                    {/* <div>
                            <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                            <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                            <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                        </div> */}
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><Link to="/privacy" className="footer__link">Privacy policy</Link></li>
                        <li><Link to='/terms' className="footer__link">Terms of services</Link></li>
                        <li><Link to="/ethics" className="footer__link">Medical Ethics</Link></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Adress</h3>
                    <ul>
                        <li><BiMap className='footer__social bx bxs-map'></BiMap>P.O.Box 385, Mukono, Uganda</li>
                        <li><BiEnvelope className='footer__social bx bxs-envelope'></BiEnvelope><a href="mailto:aquacresinfo@gmail.com">aquacresinfo@gmail.com</a></li>
                        <li><BiPhoneCall className='footer__social bx bxs-phone'></BiPhoneCall>+256 779 406 738</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">
                &#169; {new Date().getFullYear()} CHARIOT SCRIPT UGANDA - SMC LTD. All right reserved
            </p>
        </footer>
    )
}

export default Footer
