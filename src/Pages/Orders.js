import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

import './Orders.css'


function Orders() {
    return (
        <div>
            <Header />
            <div className='order__container'>
                <div className='order__left__side'>
                    <div className='order'>
                        <h2 className='order__title'>My Orders</h2>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='order__box'>
                            <div className='order__image'>
                                <img alt='' src={'../Images/capsule.png'} />
                            </div>
                            <div className='order__text'>
                                <h2>Purple And White Capsules</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!</p>
                                <h3>$40.<small>99</small></h3>
                                <Link to="#">
                                    <button className="btn">
                                        Remove from Bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='order__right__side'>
                    <div className='order__text__right'>
                        <h2>Order Summary</h2>
                        <p>10 items in bag</p>
                        <h3>Price : <strong>$409.<small>9</small></strong></h3>
                    </div>
                    <div className="contact__button">
                        <Link to="#">
                            <button className="btn">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Orders
