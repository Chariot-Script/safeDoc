import React, { Fragment, useState, useEffect } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from "../Contexts/StateProvider"
import { db } from '../Sevices/Firebase'

import './Checkout.css'


function Orders() {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection("users").doc(user?.uid).collection("doctors").get()
            .then(snapshot => { setOrders(snapshot.docs); console.log(snapshot.docs); })
            
    }, []);

    return (
        <Fragment className='container'>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Your Orders</h2>
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

export default Orders
