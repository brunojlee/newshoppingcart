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
      <i
        className="material-icons"
        style={{ fontSize: '45px', color: 'white' }}
      >
        shopping_cart
      </i>
      <div className="container-cartTitle">
        <span className="cart__title">Meu carrinho</span>
      </div>
    </Container>
  );
};

export default Header;
