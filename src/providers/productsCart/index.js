import { useState, createContext } from "react";

export const CartContext = createContext();

export const ProductsCartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);


  return (
    <CartContext.Provider value={{ productsCart, setProductsCart}}>
      {children}
    </CartContext.Provider>
  );
};
