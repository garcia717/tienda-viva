import  {products}  from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";




const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const productList = new Promise((resolve, reject) => {
        resolve(products);
    
      });
  
      productList
        .then((res) => {
         setTimeout(2000, setItems(res)) ;
        })

        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    
  
return <div>
    <h1>{greeting}</h1>
    <ItemList items={items}/>
    </div>;

};

export default ItemListContainer;
