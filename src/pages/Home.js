import Boton from "components/Boton";
import React from "react";
import styled from "styled-components";

import { faComment } from "@fortawesome/free-solid-svg-icons";
import BannerHome from "components/BannerHome";

const Hero = styled.section`
  max-width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-image: url("assets/fondos/4.jpeg");
  background-size: cover;
  background-position: right;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-weight: 700;
  }
`;

function Home() {
  return (
    <>
      <Hero>
        <HeroText>
          <h1> De Diez</h1>
          <h1> Integración Deportiva</h1>
        </HeroText>
        <Boton nav path="/nosotros" texto="Conocenos" />
      </Hero>
      <BannerHome
        icon={faComment}
        title="REPRESENTACIÓN PROFESIONAL"
        text=" Estamos especializados en la representación de deportistas
          profesionales."
      />
    </>
  );
}

export default Home;
