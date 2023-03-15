import { useContext } from 'react'
import {useParams} from "react-router-dom"
import {CartContext} from '../../context/CartContext';
import {products} from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const {id}=useParams();
    
    const {addToCart} = useContext(CartContext)

    const productSelected = products.find((element)=> element.id === Number(id));

    const onAdd = (cantidad)=>{
      let product = {...productSelected, quantity: cantidad    
      }
      addToCart(product)
    }
    

  return ( 
    <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
        <h2>Precio: $ {productSelected.price}</h2>
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer