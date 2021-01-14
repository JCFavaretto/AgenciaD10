import React from "react";
import styled from "styled-components";
import centros from "assets/fondos/4.jpeg";
import { NavLink } from "react-router-dom";

const InnerPage = styled.section`
  background-image: url(${centros});
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  background-position: top;
  padding: 7rem 0 2rem 0;
`;

const Hero = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  padding: 2rem;
  padding-bottom: 8rem;
  margin: 0 auto;
`;

const H3 = styled.h3`
  color: var(--white);
  font-weight: 700;
`;

const BotonHero = styled(NavLink)`
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  background-color: #4b9a37;
  color: var(--dark);
  text-align: center;
  max-width: 9rem;
  transition: 0.2s all ease-in;

  &:hover {
    color: var(--white);
  }
`;

function Home() {
  return (
    <InnerPage>
      <Hero>
        <H3> Agencia de Integración Deportiva</H3>
        <BotonHero to="/nosotros">Conocenos</BotonHero>
      </Hero>
    </InnerPage>
  );
}

export default Home;
