import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({  productSelected,  onAdd, quantity}) => {

  return (
    <div>
      <div>
        <img src={productSelected.img} alt="" width={"400"} />
        <h1>{productSelected.title}</h1>
        <h2>Precio: $ {productSelected.price}</h2>
        <ItemCount
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={quantity}
        />
      </div>
    </div>
  );

};

export default ItemDetail;
