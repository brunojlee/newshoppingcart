import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  background-color: rgb(3, 52, 45);
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  .container-title {
    width: 80%;
  }

  .title {
    color: rgb(221, 221, 221);
    font-size: 30px;
    padding-left: 30px;
  }

  .title strong {
    color: white;
  }

  .container-cartTitle {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(10, 118, 79);
    width: 40%;
    height: 100%;
    margin-left: 30px;
  }

  .container-cartTitle span {
    z-index: 1;
  }

  .container-cartTitle:after {
    content: '';
    position: absolute;
    top: 15px;
    right: 61.5%;
    width: 39.5%;
    height: 15px;
    background: rgb(10, 118, 79);
    transform: skew(-45deg);
    z-index: 0;
  }

  .container-cartTitle:before {
    content: '';
    position: absolute;
    top: 30px;
    right: 61.5%;
    width: 39.5%;
    height: 15px;
    background: rgb(10, 118, 79);
    transform: skew(45deg);
    z-index: 0;
  }

  .container-cartTitle .cart__title {
    color: white;
    font-size: 20px;
    padding-left: 35px;
    font-weight: 700;
  }
`;
