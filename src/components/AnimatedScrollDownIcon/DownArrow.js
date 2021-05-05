import styled, { css } from 'styled-components';

export const DownArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2px; */
  @media screen and (max-width: 475px) {
    display: none;
  }
`;
