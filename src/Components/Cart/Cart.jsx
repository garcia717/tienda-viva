import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Guardado sin cambios", "", "info");
      }
    });
  };
  const totalPrice = getTotalPrice();

  if (orderId) {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header >
            <Modal.Title>Gracias por tu compra!</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <p>Tu numero de orden es: {orderId}</p>
            <p>Revisa tu correo electronico por los detalles de tu compra</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/">
              <Button variant="primary">Seguir comprando</Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  return (
    <div>
      {!showForm ? (
        <div
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            display: "-ms-inline-flexbox",
          }}
        >
          <div>
            {cart.map((element) => {
              return (
                <div key={element.id} className={styles.cartView}>
                  <img src={element.img} alt="Imagen de Producto" width={140} />
                  <div>
                    {" "}
                    <div></div>
                    <h3>{element.title}</h3>
                    <h4>Precio: ${element.price} </h4>
                    <h5>Unidades: {element.quantity}</h5>
                    <div>
                      <h6
                        style={{
                          fontWeight: "bolder",
                          display: "flex",
                          flexDirection: "row",
                          position: "relative",
                          top: "55%",
                          left: "30%",
                        }}
                      >
                        Total compra: ${element.quantity * element.price}
                      </h6>
                    </div>
                    <Button
                      size="sm"
                      variant="danger"
                      style={{ margin: "2px", justifyContent: "space-araoud" }}
                      onClick={() => deleteProductById(element.id)}
                    >
                      Eliminar
                    </Button>
                    <Link to={`/itemDetail/${element.id}`}>
                      <Button size="sm" variant="success">
                        Modificar
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {cart.length > 0 ?(
              <div style={{ margin: "6px" }}>
              <h1>Valor total en el carrito: ${totalPrice}</h1>
              <Button variant="success" onClick={() => setShowForm(true)}>
                Continuar
              </Button>{" "}
              <Button variant="danger" onClick={clear}>
                Vaciar Carrito
              </Button>
            </div>
            ):(<div style={{Height:'1vh'}}>
              <h1>¡Tu carrito esta vacio!</h1>
              <img alt="Tu carrito  esta vacío!" src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1680387337/Tienda%20Viva/undraw_empty_cart_co35_glxr7c.png" width={650}/>
              </div>)
              
            }
          </div>
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}   />
      )}
    </div>
  );
};

export default Cart;
