import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles  from "./CartWidget.module.css";
const CartWidget = () => {
  return (
    <Link to="/Cart"> 
    <div className={styles.containerCart}>
      <FaOpencart color="white" size={45} title="Carrito de Compra" />
      <div className={styles.bubbleCounter}>
          <span>0</span>
      </div>
    </div>
    </Link>
  );
};

export default CartWidget;
