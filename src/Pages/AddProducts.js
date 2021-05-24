import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { db } from '../Sevices/Firebase'
import { useStateValue } from "../Contexts/StateProvider"

import './AddProducts.css';


function AddProducts() {
    const [{ user }] = useStateValue();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')

    const addProduct = e => {
        e.preventDefault();
        db.collection("store").add({
            title: title,
            description: description,
            price: price,
            rating: rating,
            image: image,
            addedBy: user.uid,
            addedOn: new Date(new Date().getTime())
        })
            .then((docRef) => {
                alert("Product successfully added", docRef.title)
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div>
            <Header />
            <div className="add__product">
                <div className="add__product__left">
                    <div>
                        <h2 className="add__product__title">All Products</h2>
                        <p className="add__product__content">Can you believe we are sold out?</p>
                    </div>
                </div>
                <div className="add__product__right">
                    <div className='add__product__right__side'>
                        <div className='add__product__container add__product__text__right'>
                            <form onSubmit={addProduct} className="sign-in-form">
                                <h2 className="login__title">Add Product</h2>
                                <div className="input-field">
                                    <input type="text" value={title}
                                        onChange={(e) => setTitle(e.target.value)} required placeholder="Title" />
                                </div>
                                <div className="input-field">
                                    <input type="text" value={description}
                                        onChange={(e) => setDescription(e.target.value)} required placeholder="Description" />
                                </div>
                                <div className="input-field">
                                    <input type="number" value={price}
                                        onChange={(e) => setPrice(e.target.value)} required placeholder="Price" />
                                </div>
                                <div className="input-field">
                                    <input type="number" value={rating}
                                        onChange={(e) => setRating(e.target.value)} required placeholder="Rating" />
                                </div>
                                <div className="input-field">
                                    <input type="text" value={image}
                                        onChange={(e) => setImage(e.target.value)} required placeholder="Image" />
                                </div>
                                <button className="btn" id="sign-up-btn">
                                    Submit
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

export default AddProducts;
