import Product from "../../components/Product";
import { Vitrine } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/productsCart";

const Shop = () => {

  const {productsList}= useContext(ProductsContext)
  const {setProductsCart, productsCart}= useContext(CartContext)

  return (
    <Vitrine>
      {productsList.map((product, index) => {
        return <Product product={product} addFunc={()=> setProductsCart([...productsCart, product ])} />;
      })}
    </Vitrine>
  );
};

export default Shop;