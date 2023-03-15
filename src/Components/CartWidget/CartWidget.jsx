import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles  from "./CartWidget.module.css";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext)

  const total = getTotalQuantity()
  
  return (
    <Link to="/Cart"> 
    <div className={styles.containerCart}>
      <FaOpencart color="white" size={45} title="Carrito de Compra" />
      <div className={styles.bubbleCounter}>
          <span>{total}</span>
      </div>
    </div>
    </Link>
  );
};

export default CartWidget;
