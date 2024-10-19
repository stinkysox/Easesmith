/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/SearchSection/Search";
import Products from "./components/ProductsSection/Products";
import CartModal from "./components/CartModal/CartModal";
function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const openCart = () => setCartVisible(true);
  const closeCart = () => setCartVisible(false);
  return (
    <>
      <div>
        <Header openCart={openCart} />
        <Search />
        <Products />
        <CartModal isVisible={isCartVisible} onClose={closeCart} />
      </div>
    </>
  );
}

export default App;
