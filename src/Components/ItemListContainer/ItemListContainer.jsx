import  {products}  from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection,getDocs } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader"
import { AlignVerticalCenterOutlined } from "@mui/icons-material";






const ItemListContainer = () => {

    const { categoryId } = useParams();
    
    const [items, setItems] = useState([]);

    const filteredProduct =   products.filter((elemento)=> elemento.category === categoryId)
    
  
    useEffect(() => {
      const productList = new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(categoryId? filteredProduct : products); 
        },2000)
        
    
      });
  
      productList
        .then((res) => {
         setItems(res) ;
        })

        .catch((error) => {
          console.log(error);
        });



    // const itemsCollection = collection(db, "products" )
    // getDocs(itemsCollection)
    //   .then((res) => {
    //     let products = res.docs.map((product)=>{
    //       return {
    //         ...product.data(),
    //         id: product.id
    //       }
    //     })

    //     setItems(products)
    //   } )
    }, [categoryId]);
  

  
return <div style={{ padding: '5px'}}>
      {
        items.length > 0? <ItemList items={items}/>: <BeatLoader
        color="#2f6364"
        margin={60}
        style={{display:"flex", justifyContent:"center"}}
      />
      }
    
    </div>;

};

export default ItemListContainer;
