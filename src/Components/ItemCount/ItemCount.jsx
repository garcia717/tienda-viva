import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>
      <Button variant="primary" onClick={sumar} style={{margin:'10px'}}>Agregar</Button>
      <Button variant="danger" onClick={restar} style={{margin:'10px'}}>Restar</Button>
      <Button variant="success" onClick={ ()=> onAdd(contador) } style={{margin:'10px'}}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;