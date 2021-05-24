import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"

import './Details.css'


function Details({ title, description, rating, price, image }) {

    function handleClick(e) {
        e.preventDefault();
        const popup = document.getElementById('popup');
        popup.classList.toggle('active')
    }

    return (
        <div id="popup">
            <div className="popup-content">
                {/* ========== ABOUT ========== */}
                <div className="about__container  bd-grid">
                    <div className="about__data">
                        <h2 className="section-title about__initial">{title}</h2>
                        <p className="details__description">{description}</p>
                        <br />
                        <div className="product__rating">
                            {Array(rating)
                                .fill()
                                .map((rate) => (
                                    <FaStar />
                                ))}
                        </div>

                        <h2 className="product__price">{price}</h2>
                        <Link to='/favourite'>
                            <button className="btn">
                                Add to favourites
                        </button>
                        </Link>
                        <Link to='/order'>
                            <button className="btn">
                                Add to Bag
                        </button>
                        </Link>
                    </div>

                    <img src={image} alt="" className="details__img" />
                </div>
            </div>
            <Link className="close" onClick={handleClick}><img src={'../Images/close.png'} alt="" /></Link>
        </div>
    )
}

export default Details
