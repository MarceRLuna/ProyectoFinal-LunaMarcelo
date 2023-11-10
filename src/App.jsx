import "./App.css";
// import { BotonContador } from "./components/BotonContador/BotonContador";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<h2 className="mensajito"> Sitio en contrucción </h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div> 
  );
}

export default App;
