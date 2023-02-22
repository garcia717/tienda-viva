import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        style={{ width: "4%" }}
        src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1676985571/avatarv_zp8h53.jpg"
        alt="Impronta Logo"
      />
      <ul className={styles.containerList}>
        <li>Higiene Personal</li>
        <li>Aseo del Hogar</li>
        <li>Suplementos</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
