import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return ( 
  <div>
    <Navbar />
        <ItemListContainer greeting={"Bienvenido a Tienda Viva"}/>
    <Footer />

    
    
  </div>
  );
}
export default App;