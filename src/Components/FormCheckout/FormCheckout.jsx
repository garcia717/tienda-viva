import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Button from "react-bootstrap/Button";
import  styles  from "./FormCheckout.module.css";
import Swal from "sweetalert2";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [reEmail, setReEmail] =useState({
    email:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    let email1 = userData.email
    let email2 = reEmail.email
    if(email1 !== email2){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los e-mail deben coincidir',
      })
    }else{
  
    let total = getTotalPrice();
     
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {

        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
  }};



  return (
    <div>
      <form onSubmit={handleSubmit}  className={styles.containerForm}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className={styles.containerInput}
          required
        ></input>
        <input
          type="text"
          placeholder="Apellido"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          className={styles.containerInput}
          required
        ></input>
        <input
          id="e1"
          name="email1"
          type="email"
          placeholder="E-mail"
          className={styles.containerInput}
          onChange={(e) => setReEmail({...reEmail, email: e.target.value})}
        ></input>
        <input
          id="e2"
          name="email2"
          type="email"
          placeholder="Confirma tu E-mail"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
          className={styles.containerInput}
        ></input>
        <input
          type="number"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          className={styles.containerInput}
          required
        ></input>

        <Button variant="primary" type="submit" className={styles.btn}>
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckout;
