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
        <li href="" style={{ listStyle: "none" }}>
          <a
            href="https://img.freepik.com/vector-gratis/ilustracion-concepto-400-error-solicitud-incorrecta_114360-1902.jpg?w=740&t=st=1677159400~exp=1677160000~hmac=e1ce1bc35ebb645ad4147c204a810de6c467eb33095de388e98dcf82b7bbeb62"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontWeight: "bold",
            }}
          >
            HIgiene Personal
          </a>
        </li>
        <li src="#" style={{ listStyle: "none" }}>
          <a
            href="https://img.freepik.com/vector-gratis/ilustracion-concepto-400-error-solicitud-incorrecta_114360-1902.jpg?w=740&t=st=1677159400~exp=1677160000~hmac=e1ce1bc35ebb645ad4147c204a810de6c467eb33095de388e98dcf82b7bbeb62"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontWeight: "bold",
            }}
          >
            Aseo del Hogar
          </a>
        </li>
        <li src="#" style={{ listStyle: "none" }}>
          <a
            href="https://img.freepik.com/vector-gratis/ilustracion-concepto-400-error-solicitud-incorrecta_114360-1902.jpg?w=740&t=st=1677159400~exp=1677160000~hmac=e1ce1bc35ebb645ad4147c204a810de6c467eb33095de388e98dcf82b7bbeb62"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontWeight: "bold",
            }}
          >
            Suplementos
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
