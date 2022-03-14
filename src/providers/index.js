import { ProductsProvider } from "./products";
import { ProductsCartProvider } from "./productsCart";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <ProductsCartProvider>{children}</ProductsCartProvider>
    </ProductsProvider>
  );
};

export default Providers;