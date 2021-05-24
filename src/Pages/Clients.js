import React, { Fragment } from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CheckoutClient from '../Components/CheckoutClient'
import { useStateValue } from "../Contexts/StateProvider"

import './Checkout.css'


function Clients() {

    return (
        <Fragment className='container'>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Client Requests</h2>
                    </div>
                    <FinalProducts />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

const FinalProducts = () => {
    const [{ basket }] = useStateValue();

    return (
        <Fragment>
            {basket.map((item) => (
                <CheckoutClient
                    id={item.id}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    title={item.title}
                />
            ))}
        </Fragment>
    );
};

export default Clients
