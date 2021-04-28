import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BtnLink = styled.a`
  margin-top: 2rem;
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  background-color: #4b9a37;
  color: var(--light);
  text-align: center;
  width: 11rem;
  transition: 0.2s all ease-in;
  border-radius: 50px;

  &:hover {
    background-color: #205723;
    color: white;
  }
`;

const BtnNav = styled(NavLink)`
  margin-top: 2rem;
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  background-color: #4b9a37;
  color: var(--light);
  text-align: center;
  width: 11rem;
  transition: 0.2s all ease-in;
  border-radius: 50px;

  &:hover {
    background-color: #205723;
    color: white;
  }
`;

function Boton({ nav = false, path, texto }) {
  if (nav) {
    return <BtnNav to={path}>Nav{texto}</BtnNav>;
  } else {
    return (
      <BtnLink href={path} target="_blank" rel="noreferrer">
        {texto}
      </BtnLink>
    );
  }
}

export default Boton;
