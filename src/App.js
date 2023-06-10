import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import ItemDetailContainer from "./components/itemDetailConteiner/ItemDetailContainer";
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner";
import NavBar from "./components/navBar/NavBar";
import error404 from "../src/assets/error404.png";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Contacto from "./components/contacto/Contacto";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListConteiner />} />
            <Route
              path="/category/:itemCategory"
              element={<ItemListConteiner />}
            />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<img src={error404} alt="error" />} />
            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
