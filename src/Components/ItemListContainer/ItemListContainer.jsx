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
          setItems(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    console.log(items);
  
return <div>
    <h1>{greeting}</h1>
    <ItemList items={items}/>
    </div>;
};

export default ItemListContainer;
