import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbarr.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbarr = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCatagories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCatagories);
    });
  }, []);

  return (
    <div className={styles.containerNavbar}>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Link to="/">
              {" "}
              <Navbar.Brand href="#">
                <img
                  src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1676985645/avatarv_dcmdnn.jpg"
                  width={60}
                  alt=""
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {categoryList.map((category) => {
                  return (
                    <Nav.Link
                        style={{
                        color: "whitesmoke",
                        fontWeight: "bold",
                        textDecorationLine: "none",
                      }}
                    >
                      <Link
                        style={{
                          color: "whitesmoke",
                          fontWeight: "bold",
                          textDecorationLine: "none",
                        }}
                        key={category.id}
                        to={category.path}
                      >
                        {category.title}
                      </Link>
                    </Nav.Link>
                  );
                })}
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
