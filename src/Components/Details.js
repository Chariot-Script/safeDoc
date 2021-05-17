import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"

import './Details.css'


function Details() {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        const popup = document.getElementById('popup');
        popup.classList.toggle('active')
    }

    return (
        <div id="popup">
            <div class="popup-content">
                {/* ========== ABOUT ========== */}
                <div className="about__container  bd-grid">
                    <div className="about__data">
                        <h2 className="section-title about__initial">Purple and White Capsules 500mg</h2>
                        <p className="details__description">SafeDoc is a system that allows you to
                                request for medical attention in case of an emergency. Medical
                                practitioners within your area can come in to help in a timely
                                manner other than waiting for hours to be attended to.
                        </p>
                        <br />
                        <div className="product__rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <h2 className="product__price">$40.<small>99</small></h2>
                        <button className="btn">
                            Add to favourites
                        </button>
                        <button className="btn">
                            Add to cart
                        </button>
                    </div>

                    <img src={'../Images/capsule.png'} alt="" className="details__img" />
                </div>
            </div>
            <Link class="close" onClick={handleClick}><img src={'../Images/close.png'} alt="" /></Link>
        </div>
    )
}

export default Details