import { useContext } from 'react'
import {useParams} from "react-router-dom"
import {CartContext} from '../../context/CartContext';
import {products} from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const {id}=useParams();
    
    const {addToCart, getQuantityById} = useContext(CartContext)

    const productSelected = products.find((element)=> element.id === Number(id));

    const onAdd = (cantidad)=>{
      let product = {...productSelected, quantity: cantidad    
      }
      addToCart(product)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    let quantity = getQuantityById(Number(id))
  return ( 
    <div  >
      <div >
        <img src={productSelected.img} alt="" width={"400"}/>
        <h1>{productSelected.title}</h1>
        <h2>Precio: $ {productSelected.price}</h2>
        <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer