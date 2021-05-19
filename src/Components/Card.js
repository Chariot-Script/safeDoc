import React from 'react'
import { Link } from 'react-router-dom'
import Details from '../Components/Details'

import './Card.css'


function Card() {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        const popup = document.getElementById('popup');
        popup.classList.toggle('active')
    }

    return (
        <div>
            <Details />
            <div className="card">
                <div className="imgBx">
                    <img src={'../Images/capsule.png'} alt="" />
                </div>
                <div className="contentBx">
                    <h3>Purple and White Capsules</h3>
                    <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!
                    </p>
                    <h2 className="price">$40.<small>99</small></h2>
                    <div className="contact__button">
                        <Link to="./details">
                            <button className="btn" onClick={handleClick}>
                                Details
                            </button>
                        </Link>
                        <Link to="./order">
                            <button className="btn">
                                Add to Bag
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
