import { CartIcon } from '../../assets/icons/CartIscon';
import { Container } from './styles';

type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <div className="container-title">
        <span className="title">
          <strong>trybe</strong>shopping
        </span>
      </div>
      <CartIcon fill="white" size={58} />
      <div className="container-cartTitle">
        <span className="cart__title">Meu carrinho</span>
      </div>
    </Container>
  );
};

export default Header;
