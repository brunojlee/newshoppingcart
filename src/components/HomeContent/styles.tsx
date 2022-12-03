import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .items {
    display: flex;
    flex-basis: 70%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 5px;
    width: 200px;
    border: 2px solid rgb(234, 234, 233);
    border-radius: 5px;
    box-sizing: border-box;
  }

  .item .item__sku {
    display: none;
  }

  .item .item__title {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 10px;
    text-align: center;
  }

  .item .item__image {
    width: 100%;
  }

  .item .item__add {
    background-color: rgb(5, 52, 219);
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 10px;
    color: white;
  }

  .item__price {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 10px;
    text-align: center;
  }

  .cart {
    display: flex;
    flex-basis: 32%;
    flex-flow: column wrap;
    background-color: rgb(241, 241, 238);
    height: 100vh;
  }

  .cart .cart__items {
    height: 500px;
    overflow-y: scroll;
  }

  .empty-cart {
    width: 170px;
    height: 35px;
    margin: 0 auto;
    border: 2px solid rgb(5, 52, 219);
    background-color: rgb(249, 249, 246);
  }

  .cart__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid rgb(234, 234, 233);
  }

  .cart__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid rgb(234, 234, 233);
  }
`;
