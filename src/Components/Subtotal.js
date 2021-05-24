import React from 'react'
import { useStateValue } from "../Contexts/StateProvider";
import { getBasketTotal } from "../Contexts/Reducer"
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'

import './Subtotal.css'


function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='order__right__side'>
            <CurrencyFormat
                renderText={(value) => (
                    <div className='order__container order__text__right'>
                        <h2>Order Summary</h2>
                        <p>Total of {basket.length} in basket<br />  Price : <strong>{value}</strong></p>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="UGX "
            />
            <div className="contact__button">
                <button className="btn" onClick={(e) => {
                    dispatch({
                        type: "SET_DRAWER",
                        toggle: false,
                    });
                    history.push("/payment");
                }}>
                    Proceed to Payment
                </button>
            </div>

        </div>

    )
}

export default Subtotal
