import React from 'react'
import { useStateValue } from '../Contexts/StateProvider'
import Details from '../Components/Details'
import { FaStar } from "react-icons/fa"

import './Card.css'


function Card({ id, title, description, price, image, rating }) {
    const [{user}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
        alert('Item added to basket');
    };

    return (
        <div>
            <Details />
            <div className="card">
                <div className="imgBx">
                    <img src={image} alt="" />
                </div>
                <div className="contentBx">
                    <h3>{title}</h3>
                    <p className="description">{description}</p>
                    <h2 className="price">{price}</h2>
                    <div className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((rate) => (
                                <FaStar />
                            ))}
                    </div>
                    <div className="contact__button">
                        <button className="btn" onClick={addToBasket} >
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
