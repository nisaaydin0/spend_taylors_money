import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";

function App() {
  const [money, setMoney] = useState(1600000000);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Shop</Link> | <Link to="/cart">Basket ({cart.length})</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Product money={money} setMoney={setMoney} cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setMoney={setMoney} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
