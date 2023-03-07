import React from 'react';
import Item from '../Item/Item';
import Container from "react-bootstrap/Container";

const ItemList = ({items}) => {
    return (
        <Container fluid>
        <div style={{minwidth:'100%', minHeight: '100vh' , justifyContent:'space-evenly',  gap: '1rem',  display: 'flex', flexWrap: 'wrap'}}>
        {
            items.map((element)=>{
                return(
                    <Item key={element.id} element={element}/>
                )
            })
        }
     </div>
     </Container>
      )
}  

export default ItemList