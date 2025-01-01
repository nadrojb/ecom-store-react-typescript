import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import { CartProvider } from "./context/CartContext";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
