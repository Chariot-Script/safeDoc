import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

import './Pharmacy.css'


function Pharmacy() {
    return (
        <div>
            <Header />
            {/* ========== ALL PRODUCTS ========== */}
            <section className="services section bd-container" id="services">
            <span className="section-subtitle">&nbsp;</span>
            <span className="section-subtitle">Shop</span>
                <h2 className="section-title">All Products</h2>

                <div className="services__container  bd-grid">
                    <Card id='13345770' title='Purple and White Capsules 300mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={3} image='../Images/capsule.png' price={40.99} />
                    <Card id='14345770' title='Purple and White Capsules 200mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={3} image='../Images/capsule.png' price={40.99} />
                    <Card id='15345770' title='Purple and White Capsules 1000mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                </div>
                <div className="services__container  bd-grid">
                    <Card id='12345670' title='Purple and White Capsules 250mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                    <Card id='12345860' title='Purple and White Capsules 400mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                    <Card id='12345790' title='Purple and White Capsules 100mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                </div>
                <div className="services__container  bd-grid">
                    <Card id='12345670' title='Purple and White Capsules 250mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                    <Card id='12345860' title='Purple and White Capsules 400mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                    <Card id='12345790' title='Purple and White Capsules 100mg' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!' rating={4} image='../Images/capsule.png' price={40.99} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Pharmacy
