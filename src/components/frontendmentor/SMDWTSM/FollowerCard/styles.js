import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 340px;
  height: 240px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.theme.cardBG};
  color: ${(props) => props.theme.theme.textPrimary};

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  // 72px is because the gap of 24px between cards
  //divided by 4 'cuz we want 4 cards on large screens
  //TODO control gap from 1 place
  @media screen and (min-width: 1440px) {
    width: calc((100% - 72px) / 4);
  }

  ${(props) => {
    return css`
      &::before {
        content: '';
        position: absolute;
        background: ${props.borderColor};
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
      }
    `;
  }};
`;

export const Header = styled.div`
  display: flex;
  gap: 15px;
`;

export const Amount = styled.div`
  & p:first-child {
    font-size: 4em;
    font-weight: 700;
    color: ${(props) => props.theme.theme.textSecondary};
  }
  & p:last-child {
    font-size: 0.9em;
    letter-spacing: 0.45em;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;

  ${(props) => {
    return css`
      color: ${props.isUp
        ? props.theme.neutral.limeGreen
        : props.theme.neutral.brightRed};
    `;
  }}
`;
