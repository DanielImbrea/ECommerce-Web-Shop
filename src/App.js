import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";
export const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  // async function e ca si cum ai folosi try and catch, doar ca codul arata mult mai clean
  const fetchProducts = async () => {
    //   asteptam un api de la commerce.products.list
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();
    // setCart(cart);
    // or
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(products);
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <p>da</p>
    </div>
  );
};

export default App;
