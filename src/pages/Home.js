import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

const Hero = styled.section`
  max-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 8rem;
  margin: 0 auto;
`;

const H3 = styled.h1`
  color: white;
  font-weight: 700;
`;

const BotonHero = styled(NavLink)`
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  background-color: #4b9a37;
  color: var(--light);
  text-align: center;
  max-width: 9rem;
  transition: 0.2s all ease-in;

  &:hover {
    padding: 0.8rem 1.2rem;
  }
`;

function Home() {
  return (
    <InnerPage>
      <Hero>
        <H3>Asociación Civil de Integración Deportiva</H3>
        <BotonHero to="/nosotros">Conocenos</BotonHero>
      </Hero>
    </InnerPage>
  );
}

export default Home;
