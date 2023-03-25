import React, { useState } from 'react'
import {addDoc, collection, updateDoc, doc} from "firebase/firestore"
import db from "../../firebaseConfig"

const FormCheckout = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "", 

    })
    const handleSubmit = (e) => {
        e.preventDefault()
        let total = getTotalPrice()

        let order = {
            buyer: userData,
            items: cart,
            total
        }
        let orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
        .then(res)
        .catch(err)

        cart.map((product)=>{
            let refDoc = doc(db, "products", product.id)
            updateDoc(refDoc, {stock: product.stock - product.quantity})
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <imput type="text" placeholder="Nombre" value = {userData.name} onChange = {(e) => setUserData({...userData, name: e.target.value})}></imput>
            <imput type="text" placeholder="E-mail" value = {userData.email} onChange = {(e) => setUserData({...userData, email: e.target.value})}></imput>
            <imput type="text" placeholder="Telefono" value = {userData.phone} onChange = {(e) => setUserData({...userData, phone: e.target.value})}></imput>
        </form>
        <button type='submit'></button>
    </div>
  )
}

export default FormCheckout