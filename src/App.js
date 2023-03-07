
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbarr  from "./Components/Navbarr/Navbarr";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer.jsx/ItemDetailContainer";


function App() {
  return ( 

    <BrowserRouter>
      <Navbarr />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>  
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart/>}/>  
        <Route path="/Login" element={<Login/>}/>  
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>error 404: not found</h1>}/> 
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}
export default App;