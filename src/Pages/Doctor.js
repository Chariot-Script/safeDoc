import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FaFile } from "react-icons/fa";
import { db } from '../Sevices/Firebase'
import { useStateValue } from "../Contexts/StateProvider"

import './Pharmacy.css'


function Pharmacy() {
    const [{ user }] = useStateValue();
    const [message, setMessage] = useState('')

    const requestDoctor = e => {
        e.preventDefault();
        db.collection("request_doctor").add({
            name: user.displayName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            message: message,
            addedBy: user.uid,
            addedOn: new Date(new Date().getTime())
        })
        .then((docRef) => {
            alert("Request successfully made", docRef.title)
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div>
            <Header />
            <div className="register__container">
                <div className="forms_container">
                    <div className="signin-signup">
                        <form onSubmit={requestDoctor} className="sign-in-form">
                            <h2>Additional information</h2>
                            <div className="input-field">
                                <FaFile />
                                <input type="text" value={message}
                                    onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                            </div>
                            <button className="btn" id="sign-up-btn">
                                Confirm Request
                            </button>
                        </form>
                    </div>
                </div>

                <div className="panels__container">
                    <div className="register__panel left__panel">
                        <div className="register__content">
                            <h3>Request for a Doctor</h3>
                            <p>
                                Any additional info can be added in the box.<br />
                                A Physician will be contacting you as soon as possible.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pharmacy
