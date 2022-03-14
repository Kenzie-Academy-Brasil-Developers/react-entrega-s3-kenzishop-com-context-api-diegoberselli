import { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsList, setProducts] = useState([
    {
        id: 1,
        name: "Box Pocket Luxo De O Senhor Dos Anéis - 1ª Ed.",
        price: 119.90,
        img: "https://images-americanas.b2w.io/produtos/01/00/img/3046164/7/3046164764_1SZ.jpg",
    },
    {
      id: 2,
      name: "12 Regras Para A Vida: Um Antídoto Para O Caos",
      price: 29.90,
      img: "https://images-americanas.b2w.io/produtos/01/00/img/133314/1/133314126_1SZ.jpg",
    },
    {
      id: 3,
      name: "Box - O Essencial da Filosofia Grega (3 Volumes)",
      price: 39.90,
      img: "https://images-americanas.b2w.io/produtos/01/00/item/116645/1/116645185SZ.jpg",
    },
    {
      id: 4,
      name: "A Game of Thrones: The Graphic Novel (Vol.2)",
      price: 56.99,
      img: "https://images-americanas.b2w.io/produtos/01/00/item/119476/2/119476250_1GG.jpg",
    },
    {
      id: 5,
      name: "Livro - Mindset: A nova psicologia do sucesso",
      price: 39.90,
      img: "https://images-americanas.b2w.io/produtos/130282085/imagens/livro-mindset-a-nova-psicologia-do-sucesso/130282085_1_xlarge.jpg",
    },
    {
      id: 6,
      name: "12 Regras Para A Vida: Um Antídoto Para O Caos",
      price: 29.90,
      img: "https://images-americanas.b2w.io/produtos/01/00/img/133314/1/133314126_1SZ.jpg",
    },
  
  ]);

  return (
    <ProductsContext.Provider value={{ productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};