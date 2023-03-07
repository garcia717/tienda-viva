import React from 'react'
import {useParams} from "react-router-dom"
import {products} from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const {id}=useParams();
    const productSelected = products.find((element)=> element.id === Number(id));
    const onAdd = (cantidad)=>{
        console.log(`se agrego al carrito ${cantidad} productos `)
      }
  return (
    <div>
        <h1>{productSelected.title}</h1>
        <img src="https://res.cloudinary.com/dkpm1gaqm/image/upload/v1677433549/Tienda%20Viva/qjhtvcky3jrojs3sx8po.jpg" alt="" />
        <h2>Precio: $ {productSelected.price}</h2>
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer