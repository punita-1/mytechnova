import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: #1B4242;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    box-shadow: 0 1rem 2rem 0 #5C8374;
    border: 2px solid #5C8374;
    transform: scale(0.90);

  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
  }
  
`;
