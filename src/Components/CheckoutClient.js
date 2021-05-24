import React from 'react'
import { useStateValue } from "../Contexts/StateProvider";
import { FaStar } from "react-icons/fa"

import './CheckoutProduct.css'


function CheckoutClient({ id, image, description, title, price, rating }) {
    const [ dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id,
        });
        alert('Item removed from basket!')
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>UGX</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((rate) => (
                            <FaStar />
                            ))}
                </p>
                <button className='btn' onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutClient
