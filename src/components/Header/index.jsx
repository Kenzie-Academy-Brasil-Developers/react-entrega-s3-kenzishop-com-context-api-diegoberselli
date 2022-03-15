import { Barra, Span, Logo } from "./style";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../providers/productsCart";

import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

const Header = () => {
  const history = useHistory();

  const { productsCart } = useContext(CartContext);
  const counter = productsCart.length;

  return (
    <Barra>
      <Logo>
        Kenzie<Span>Shop</Span>
      </Logo>
      <Button
        color="secondary"
        onClick={() => {
          history.push("/");
        }}
      >
        <AiOutlineHome size={25} />
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          history.push("/cart");
        }}
      >
        <Stack spacing={2} direction="row">
          <Badge badgeContent={counter} color="secondary">
            <AiOutlineShoppingCart size={25} />
          </Badge>
        </Stack>
      </Button>
      <Button color="secondary">Entrar</Button>
    </Barra>
  );
};

export default Header;
