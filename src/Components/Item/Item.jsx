import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({ element }) => {
  return (
    <div >

    <Card style={{ width: '18rem'}}>
      <Card.Img  variant="top" src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1677433549/Tienda%20Viva/qjhtvcky3jrojs3sx8po.jpg" />
      <Card.Body >
        <Card.Title >{element.title}</Card.Title>
        <Card.Title>Precio: ${element.price}</Card.Title>
        <Card.Text>
          {element.description}
        </Card.Text>
        <Link to={`/itemDetail/${element.id}`}><Button variant="success">Ver más</Button></Link>
      </Card.Body>
    </Card>

    </div>
  );
};

export default Item;
