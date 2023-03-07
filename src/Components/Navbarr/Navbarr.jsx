import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbarr.module.css";
import { Link } from "react-router-dom";
 
const Navbarr = ({ children }) => {
  return (
    <div className={styles.containerNavbar}>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Link to="/"> <Navbar.Brand href="#"><img src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1676985645/avatarv_dcmdnn.jpg" width={60}   alt="" /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px"}}
                navbarScroll
              >
                <Link to="/"><Nav.Link href="#action1" style={{color:'whitesmoke', fontWeight:'bold'}}>Home</Nav.Link></Link>
                <Link to="/category/Articulos del hogar"><Nav.Link href="#action2" style={{color:'whitesmoke' , fontWeight:'bold'}}>Articulos del hogar</Nav.Link></Link>
                <Link to="/category/Higiene Personal"><Nav.Link href="#action3" style={{color:'whitesmoke', fontWeight:'bold'}}>Higiene Personal</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <CartWidget />
        </Navbar>
      </div>
      {children}
    </div>
  );
};

export default Navbarr;
