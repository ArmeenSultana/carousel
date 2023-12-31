import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { CartContext, WishListContext } from "./utils/contextAPIS";

const App = () => {
  const [cartProducts, setCardProducts] = useState([]);
  const [wishlistProducts, setWishListProducts] = useState([]);
  return (
    <>
      {/* 
          Done Boss Text into Meet Chat 
          If any Question Untill
          They Cool Down
        */}
      <WishListContext.Provider
        value={{ wishlistProducts, setWishListProducts }}
      >
        <CartContext.Provider value={{ cartProducts, setCardProducts }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
        </CartContext.Provider>
      </WishListContext.Provider>
    </>
  );
};

export default App;
