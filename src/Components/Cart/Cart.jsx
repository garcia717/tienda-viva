import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice()

  return (
    <div >
      {
        cart.map((element)=>{
          return <div key={element.id}>
             <h1>{element.title}</h1>
             <img src={element.img} alt="" />
             <h2> {element.price} </h2>
             <h3>{element.quantity}</h3>
          </div>
        })
      }
      <h1>{totalPrice}</h1>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default Cart;
