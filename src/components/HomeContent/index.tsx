import { Container } from './styles';

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <Container>
      <section className="items"></section>
      <section className="cart">
        <ol className="cart__items"></ol>
        <div className="cart__total">
          <h3>Preço total:</h3>
          <h3 className="total-price"></h3>
        </div>
        <button className="empty-cart" id="carrinho">
          Esvaziar carrinho
        </button>
      </section>
    </Container>
  );
};

export default HomeContent;
