import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card() {
    return (
        <div className="card">
            <div className="imgBx">
                <img src={'../Images/capsule.png'} alt="" />
            </div>
            <div className="contentBx">
                <h3>Wireless Headphones</h3>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!
                    </p>
                <h2 className="price">$40.<small>99</small></h2>
                <div className="contact__button">
                    <Link to="./contact">
                        <button className="btn">
                            Add to cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
