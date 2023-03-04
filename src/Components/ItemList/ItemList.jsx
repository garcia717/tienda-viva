import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items}) => {
    return (
        <div style={{width:'100%', minHeight: '100vh' , justifyContent:'space-evenly',  display:'flex' ,  gap: '1rem', backgroundColor: 'green'}}>
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