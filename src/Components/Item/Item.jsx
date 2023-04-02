import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  const currentStock = element.stock;
  return (
    <div>
      {currentStock > 0 ? (
        <Card style={{ width: "18rem", boxShadow: "0px 2px 5px 0px" }}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1677433549/Tienda%20Viva/qjhtvcky3jrojs3sx8po.jpg"
          />
          <Card.Body style={{ backgroundColor: "#2f6364" }}>
            <Card.Title style={{ color: "white" }}>{element.title}</Card.Title>
            <Card.Title style={{ color: "white" }}>
              Precio: ${element.price}
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              {element.description}
            </Card.Text>
            <Link to={`/itemDetail/${element.id}`}>
              <Button variant="success">Ver más</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Item;
