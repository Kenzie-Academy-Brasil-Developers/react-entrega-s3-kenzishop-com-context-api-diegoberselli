import { Div } from "./styles";
import { Button } from "@mui/material";

const Product = ({ product, addFunc }) => {
  return (
    <Div>
      <h4>{product.name}</h4>
      <img
        src={product.img}
        alt={product.name}
        width="150px"
        height="150px"
      ></img>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <Button color="secondary" variant="contained" onClick={addFunc}>
        Adicionar ao carrinho
      </Button>
    </Div>
  );
};
export default Product;