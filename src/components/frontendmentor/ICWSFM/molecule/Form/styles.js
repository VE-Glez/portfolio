import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  padding: 30px;
  color: green;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 5px rgba(0, 0, 0, 0.2);
`;

export const Msg = styled.p`
  color: hsl(246, 25%, 77%);
  font-size: 1.3rem;
  text-align: center;
  a,
  a:visited {
    text-decoration: none;
    color: hsl(0, 100%, 74%);
    font-weight: 600;
  }
`;
