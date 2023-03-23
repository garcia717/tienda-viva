import { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {CartContext} from '../../context/CartContext';
import { db } from '../../firebaseConfig';
import {getDoc, collection, doc} from "firebase/firestore"
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const {id}=useParams();
    
    const {addToCart, getQuantityById} = useContext(CartContext)

    const [productSelected, setProductSelected] = useState({})
    useEffect(()=>{
      const itemsCollection = collection(db, "products")
      const ref = doc(itemsCollection, id)
      getDoc(ref)
      .then(res => {
        setProductSelected({
            ...res.data(),
            id: res.id
          
        })
      })
    }, [id])

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