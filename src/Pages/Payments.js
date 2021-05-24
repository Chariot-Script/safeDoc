import React, { Fragment } from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from "../Contexts/StateProvider"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../Contexts/Reducer"

import './Payments.css'


function Orders() {
    const [{ user, basket }] = useStateValue();

    return (
        <Fragment className='container'>
            <Header />
            <div className="payment">
                <div className="payment__container">
                    <h1>
                        Total of {basket?.length} in basket
                    </h1>
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 React</p>
                            <p>Nagpur</p>
                        </div>
                    </div>

                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment</h3>
                        </div>
                        <div className="payment__details">
                            <form >
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => <Fragment><h3>Order Total: {value}</h3></Fragment>}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType="text"
                                        thousandSeperator={true}
                                        prefix="UGX "
                                    />
                                    <button className="btn">
                                        Proceed to Payment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Basket</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Orders
