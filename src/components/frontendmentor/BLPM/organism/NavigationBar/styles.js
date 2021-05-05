import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 4vw;
  font-size: 16px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    padding: 0 2em;
  }
`;

export const Logo = styled.img`
  width: auto;
`;

export const Nav = styled.nav`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 1.5em;
  position: absolute;
  top: 110%;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  border-radius: 0.3em;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    position: initial;
    transform: none;
    background-color: transparent;
    visibility: visible;
  }
`;

export const Links = styled.div`
  border-block-end: 3px solid hsl(240, 2%, 79%);
  padding: 2em 0;
  width: 100%;

  @media screen and (min-width: 1440px) {
    display: flex;
    padding: 0;
    width: fit-content;
    border: none;
  }
`;

export const Buttons = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  width: 60%;

  button {
    border: none;
    padding: 1em 1.5em;
    border-radius: 2em;
    font-size: 16px;
  }

  .login {
    background-color: transparent;

    @media screen and (min-width: 1440px) {
      color: white;
    }
  }

  .signUp {
    color: white;
    background-image: linear-gradient(
      45deg,
      hsl(355, 100%, 74%),
      hsl(356, 100%, 66%)
    );

    @media screen and (min-width: 1440px) {
      background: white;
      color: hsl(356, 100%, 66%);

      &:hover {
        background: hsla(0, 0%, 100%, 0.35);
        color: white;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: auto;
  }
`;

export const Icon = styled.img`
  display: inline-block;

  @media screen and (min-width: 1440px) {
    visibility: hidden;
  }
`;
