import Boton from "components/Boton";
import React from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Home() {
  return (
    <InnerPage>
      <Hero>
        <H3>
          <div style={{}}> De Diez</div>
          <div> Integración Deportiva</div>
        </H3>
        <Boton nav path="/nosotros" texto="Conocenos" />
      </Hero>
    </InnerPage>
  );
}

export default Home;
