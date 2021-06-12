import styled, { keyframes } from 'styled-components';

const animate = keyframes`
0% {
  background-position: -500%;
}
100% {
  background-position: 500%;
}
`;

const Paragraph = styled.p`
  display: inline-block;
  background: linear-gradient(90deg, black, white, black);
  background-size: 80%;
  background-repeat: no-repeat;
  /* animation: ${animate} 3500ms ease-in-out infinite; */
  background-clip: text;
  color: white;
  /* overflow-x: scroll; */
  height: 100px;
  font-size: 2.5em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Paragraph;
