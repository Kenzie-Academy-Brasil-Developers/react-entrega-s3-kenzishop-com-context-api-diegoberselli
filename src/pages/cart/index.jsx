import ProductCart from "../../components/ProductCart";
import { Vitrine, Div, Title, Button } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/productsCart";

const Cart = () => {
  const { productsCart, setProductsCart } = useContext(CartContext);

  const counter = productsCart.length
  const amount = productsCart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <Vitrine>
        {productsCart.map((product) => {
          return (
            <ProductCart
              product={product}
              addFunc={() =>
                setProductsCart(
                  productsCart.filter((element) => product.id !== element.id)
                )
              }
            />
          );
        })}
      </Vitrine>
      <Div>
        <Title>Resumo do pedido</Title>
        <div>{counter} Produtos</div>
        <div>{new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(amount)}</div>
        <Link to="/">Continuar comprando</Link>
        <Button>Finalizar compra</Button>
      </Div>
    </>
  );
};

export default Cart;
