import styled, { css } from 'styled-components';

export const Lista = styled.ul`
  position: relative;
  color: hsl(237, 17%, 21%);
  font-weight: 700;
  margin-inline-end: 5px;

  &:focus {
    outline: none;
    color: hsla(237, 17%, 21%, 0.75);
  }
`;

export const Title = styled.li`
  padding: 0.5em 1.4em;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Icon = styled.img`
  transform: translateY(${(props) => (props.isClicked ? '-100%' : '-50%')})
    rotate(${(props) => (props.isClicked ? '180deg' : 0)});
  margin-inline-start: 8px;
`;

export const SecondaryList = styled.ul`
  display: ${(props) => (props.isClicked ? 'inline-block' : 'none')};
  background-color: hsl(240, 2%, 79%);
  width: 100%;
  padding: 1.1em 1.4em;
  border-radius: 0.35em;
  position: relative;

  @media screen and (min-width: 1440px) {
    background-color: white;
    position: absolute;
    top: 115%;
    left: 0;
  }
`;

export const ListItem = styled.li`
  padding: 0.4em 0.2em;

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
