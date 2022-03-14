import { Div, Name } from "./styles";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const Product = ({ product, addFunc }) => {
  return (
    <Div>
      <Name>{product.name}</Name>
      <img
        src={product.img}
        width="100px"
        height="100px"
        alt={product.name}
      ></img>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={addFunc}
      >
        Remover
      </Button>
    </Div>
  );
};
export default Product;
