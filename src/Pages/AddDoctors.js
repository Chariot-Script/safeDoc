import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { db } from '../Sevices/Firebase'
import { useStateValue } from "../Contexts/StateProvider"
// import moment from 'moment'
// import Doctor from '../Components/Doctor'

import './AddProducts.css';


function AddDoctors() {
    const [{ user }] = useStateValue();
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [image, setImage] = useState('')
    const [doctors, setDoctors] = useState([])


    const addDoctor = e => {
        e.preventDefault();
        db.collection('users').doc(user?.uid).collection('doctors').doc(doctors?.id).set({
            name: name,
            designation: designation,
            phone: phone,
            email: email,
            gender: gender,
            dateOfBirth: dateOfBirth,
            image: image,
            addedBy: user.uid,
            addedOn: new Date(new Date().getTime())

        })
            .then(() => {
                alert("Doctor successfully added")
            })
            .catch((error) => alert(error.message));
    }

    useEffect(() => {
        if (user) {
            db.collection('users').doc(user?.uid).collection('doctors').orderBy('addedOn', "desc")
                .onSnapshot(snapshot => {
                    setDoctors(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                })
        } else { setDoctors([]) }
    }, [user])

    return (
        <div>
            <Header />
            <div className="add__product">
                <div className="add__product__left">
                    <div>
                        <h2 className="add__product__title">All Doctors</h2>
                        <p className="add__product__content">Wow you need to hire more doctors</p>
                        {
                            doctors?.map(doctor => {
                                return (
                                    <div className="checkoutProduct" key={doctor.id}>
                                        <img src={doctor.data.image} alt="" className="checkoutProduct__image" />
                                        <div className="checkoutProduct__info">
                                            <p className="checkoutProduct__content">{doctor.id}</p>
                                            <p className="checkoutProduct__title">{doctor.data.name}</p>
                                            <p className="checkoutProduct__content">{doctor.data.designation}</p>
                                            <p className="checkoutProduct__content">{doctor.data.phone}</p>
                                            <p className="checkoutProduct__content">{doctor.data.email}</p>
                                            <p className="checkoutProduct__content">{doctor.data.gender}</p>
                                            <p className="checkoutProduct__content">{doctor.data.dateOfBirth}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="add__product__right">
                    <div className='add__product__right__side'>
                        <div className='add__product__container add__product__text__right'>
                            <form onSubmit={addDoctor} className="sign-in-form">
                                <h2 className="login__title">Add Doctors</h2>
                                <div className="input-field">
                                    <input type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} required placeholder="Name" />
                                </div>
                                <div className="input-field">
                                    <input type="text" value={designation}
                                        onChange={(e) => setDesignation(e.target.value)} required placeholder="Designation" />
                                </div>
                                <div className="input-field">
                                    <input type="number" value={phone}
                                        onChange={(e) => setPhone(e.target.value)} required placeholder="Phone" />
                                </div>
                                <div className="input-field">
                                    <input type="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <input type="text" value={gender}
                                        onChange={(e) => setGender(e.target.value)} required placeholder="Gender" />
                                </div>
                                <div className="input-field">
                                    <input type="date" value={dateOfBirth}
                                        onChange={(e) => setdateOfBirth(e.target.value)} required placeholder="Date of birth" />
                                </div>
                                <div className="input-field">
                                    <input type="text" value={image}
                                        onChange={(e) => setImage(e.target.value)} required placeholder="Image" />
                                </div>
                                <button className="btn" id="sign-up-btn">
                                    Add Doctor
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddDoctors;
