import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaPhone, FaEnvelope, FaSuitcase, FaCalendarAlt, FaUsers, FaFileMedical, FaAllergies, FaLanguage } from "react-icons/fa";
import { BiMap, BiBuildings, BiDonateBlood } from "react-icons/bi";
import { db } from '../Sevices/Firebase'
import { useStateValue } from "../Contexts/StateProvider"

import './Details.css'


function EditProfile() {
    const [{ user }] = useStateValue();
    const [name, setName] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [occupation, setOccupation] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [employer, setEmployer] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [maritualStatus, setMaritualStatus] = useState('')
    const [preferredLanguage, setPreferredLanguage] = useState('')
    const [medicalConditions, setMedicalConditions] = useState('')
    const [allergies, setAllergies] = useState('')
    const [blodType, setBlodType] = useState('')

    const editProfile = e => {
        e.preventDefault();
        db.collection("users").doc(user?.uid).collection("users").add({
            name: name,
            profilePicture: profilePicture,
            occupation: occupation,
            phoneNumber: phoneNumber,
            email: email,
            address: address,
            employer: employer,
            dateOfBirth: dateOfBirth,
            gender: gender,
            maritualStatus: maritualStatus,
            preferredLanguage: preferredLanguage,
            medicalConditions: medicalConditions,
            allergies: allergies,
            blodType: blodType
        })
            .then((docRef) => {
                alert("Profile edited successfully", docRef.title)
            })
            .catch((error) => alert(error.message));
    }

    function handleClick(e) {
        e.preventDefault();
        const popup = document.getElementById('popup');
        popup.classList.toggle('active')
    }

    return (
        <div id="popup">
            <div className="popup-content">
                {/* ========== ABOUT ========== */}
                <div className="signin-signup">
                    <form onSubmit={editProfile} className="sign-in-form">
                        <div className="input-field">
                            <FaUserAlt />
                            <input type="text" value={gender}
                                onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                        </div>
                        <div className="input-field">
                            <FaCalendarAlt />
                            <input type="date" value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" />
                        </div>
                        <div className="input-field">
                            <FaUsers />
                            <input type="text" value={maritualStatus}
                                onChange={(e) => setMaritualStatus(e.target.value)} placeholder="Maritual Status" />
                        </div>
                        <div className="input-field">
                            <FaLanguage />
                            <input type="text" value={preferredLanguage}
                                onChange={(e) => setPreferredLanguage(e.target.value)} placeholder="Preferred Language " />
                        </div>
                        <div className="input-field">
                            <FaFileMedical />
                            <input type="email" value={medicalConditions}
                                onChange={(e) => setMedicalConditions(e.target.value)} placeholder="Medical Conditions" />
                        </div>
                        <div className="input-field">
                            <FaAllergies />
                            <input type="text" value={allergies}
                                onChange={(e) => setAllergies(e.target.value)} placeholder="Allergies" />
                        </div>
                        <div className="input-field">
                            <BiDonateBlood />
                            <input type="text" value={blodType}
                                onChange={(e) => setBlodType(e.target.value)} placeholder="Blood Type" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels__container">
                <form action="#" className="sign-in-form">
                    <div className="input-field">
                        <FaUserAlt />
                        <input type="text" value={profilePicture}
                                onChange={(e) => setProfilePicture(e.target.value)} placeholder="Profile Picture" />
                    </div>
                    <div className="input-field">
                        <FaUserAlt />
                        <input type="text" value={name}
                                onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="input-field">
                        <FaSuitcase />
                        <input type="text" value={occupation}
                                onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" />
                    </div>
                    <div className="input-field">
                        <FaPhone />
                        <input type="number" value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                    </div>
                    <div className="input-field">
                        <FaEnvelope />
                        <input type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <BiMap />
                        <input type="text" value={address}
                                onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    </div>
                    <div className="input-field">
                        <BiBuildings />
                        <input type="text" value={employer}
                                onChange={(e) => setEmployer(e.target.value)} placeholder="Employer" />
                    </div>
                    <button className="btn" id="sign-up-btn">
                        Update Profile
                    </button>
                </form>
            </div>
            <Link className="close" onClick={handleClick}><img src={'../Images/close.png'} alt="" /></Link>
        </div>

    )
}

export default EditProfile
