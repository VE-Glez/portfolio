import styled, { keyframes } from 'styled-components';

const Paragraph = styled.p`
  display: inline-block;
  background: linear-gradient(
    90deg,
    black 10%,
    var(--secondary),
    black 80%
  );
  background-size: 80%;
  background-repeat: no-repeat;
  background-clip: text;
  font-size: 2.5em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: fit-content;
  white-space: nowrap;
  align-self: center;
  // border: 1px solid crimson;
`;

export default Paragraph;
