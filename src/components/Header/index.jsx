import { Barra, Span, Logo } from "./style";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const history = useHistory();

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
        <AiOutlineShoppingCart size={25} />
      </Button>
      <Button color="secondary">Entrar</Button>
    </Barra>
  );
};
export default Header;
