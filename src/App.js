
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbarr  from "./Components/Navbarr/Navbarr";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";


function App() {
  return ( 

    <BrowserRouter>
    <CartContextProvider>
      <Navbarr />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>  
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart/>}/>  
        <Route path="/Login" element={<Login/>}/>  
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/form" element ={<Form />}/>
        <Route path="*" element={<h1>error 404: not found</h1>}/> 
      </Routes>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>


  );
}
export default App;