import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items}) => {
    return (
        <div >
        {
            items.map((element)=>{
                return(
                    <Item key={element.id} element={element}/>
                )
            })
        }
     </div>
      )
}  

export default ItemList