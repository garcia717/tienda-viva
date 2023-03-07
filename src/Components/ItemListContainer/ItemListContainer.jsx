import  {products}  from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"






const ItemListContainer = () => {

    const { categoryId } = useParams();
    
    const [items, setItems] = useState([]);

    const filteredProduct =   products.filter((elemento)=> elemento.category === categoryId)
    
  
    useEffect(() => {
      const productList = new Promise((resolve, reject) => {
        resolve(categoryId? filteredProduct : products); 
    
      });
  
      productList
        .then((res) => {
         setItems(res) ;
        })

        .catch((error) => {
          console.log(error);
        });
    }, [categoryId]);
  
    
  
return <div style={{backgroundColor: '#be9e8f', padding: '5px'}}>

    <ItemList items={items}/>
    </div>;

};

export default ItemListContainer;
