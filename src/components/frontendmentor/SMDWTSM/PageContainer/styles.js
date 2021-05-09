import styled from 'styled-components';

export const Interruptor = styled.label`
  display: inline-block;
  border-radius: 20px;
  width: 45px;
  height: 22px;
  margin-inline-start: 15px;
  position: relative;
  background: ${({ theme }) => theme.theme.toggle};

  &:hover {
    background: ${({ theme }) => theme.theme.toggle};
    cursor: pointer;
  }

  span {
    position: absolute;
    height: 18px;
    width: 18px;
    top: 1.5px;
    right: 4px;
    border-radius: 50%;
    z-index: 10;
    transition: 0.5s;
    background: ${({ theme }) => theme.theme.bg};
  }

  input {
    display: none;
  }

  input:checked ~ span {
    transform: translateX(-20px);
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: auto;
  }
`;

export const Supercontainer = styled.div`
  background-color: ${({ theme }) => theme.theme.bg};
  position: relative;
  min-height: 100vh;
  color: ${({ theme }) => theme.theme.textPrimary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    background-color: ${({ theme }) => theme.theme.topBGPattern};
    z-index: 0;
    border-radius: 0 0 20px 20px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  font-weight: 700;

  h1 {
    color: ${({ theme }) => theme.theme.textSecondary};
    font-size: 1.5em;
  }

  div:first-of-type {
    border-block-end: 1px solid ${({ theme }) => theme.theme.textPrimary};
    padding-block-end: 2em;
    width: 100%;

    @media screen and (min-width: 1440px) {
      border: none;
      width: auto;
      padding-block-end: 0;
    }
  }
`;
