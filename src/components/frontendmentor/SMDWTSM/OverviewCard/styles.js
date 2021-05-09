import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 340px;
  height: 130px;
  padding: 25px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.theme.cardBG};
  color: ${({ theme }) => theme.theme.textPrimary};

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
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Number = styled.span`
  color: ${({ theme }) => theme.theme.textSecondary};
  font-weight: 700;
  font-size: 2.5em;
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75em;
  color: ${({ isUp, theme }) =>
    isUp ? theme.neutral.limeGreen : theme.neutral.brightRed};

  span {
    margin-inline-start: 5px;
  }
`;
