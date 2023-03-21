import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"



const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById} =
    useContext(CartContext);
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

  return (
    <div style={{flexDirection:"row", flexWrap:"wrap", display:"-ms-inline-flexbox"}}>
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
              <Link to={`/itemDetail/${element.id}`}><Button size="sm" variant="success">Modificar</Button></Link>
            </div>
          </div>
        );
      })}
      </div>
      <div style={{width:"95%"}}>
        <h1>Valor total en el carrito: ${totalPrice}</h1>
        {
          cart.length > 0 && <div style={{margin:"6px"}}><Button variant="success">Comprar</Button> <Button variant="danger" onClick={clear}>Vaciar Carrito</Button></div> 
        }
        
      </div>
    </div>
  );
};

export default Cart;
