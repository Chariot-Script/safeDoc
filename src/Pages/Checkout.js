import React, { Fragment } from "react"
import Subtotal from '../Components/Subtotal'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from "../Contexts/StateProvider"

import './Checkout.css'


function Checkout() {

    return (
        <Fragment className='container'>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    </div>
                    <FinalProducts />
                </div>
                <div className="checkout__right">
                    <Subtotal />
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
                <CheckoutProduct
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

export default Checkout
