import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consult = undefined;
    if(categoryId){
      const q = query(itemsCollection, where("category", "==", categoryId))
      consult = getDocs(q)
    }else{
      consult = getDocs(itemsCollection)
    }

    consult.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "5px" }}>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <BeatLoader
          color="#2f6364"
          margin={60}
          style={{ display: "flex", justifyContent: "center" }}
        />
      )}
    </div>
  );
};

export default ItemListContainer;
