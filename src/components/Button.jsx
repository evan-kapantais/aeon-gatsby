import React from "react";
import styled from "styled-components";

const B = styled.button`
  padding: 0.4rem 1rem;
  text-transform: uppercase;
  background: #222;
  color: #fff;
  border-radius: 2px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: box-shadow 300ms ease;

  &:hover {
    box-shadow: 3px 3px #ee5b5f;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <B type='button' onClick={onClick}>
      {children}
    </B>
  );
};

export default Button;
