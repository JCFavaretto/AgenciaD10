import Boton from "components/Boton";
import React from "react";
import styled from "styled-components";

import { faComment } from "@fortawesome/free-solid-svg-icons";
import BannerHome from "components/BannerHome";
import fondo from "assets/fondos/4.jpeg";
import ListPlayerCard from "components/ListPlayerCard";

const Hero = styled.section`
  max-width: 100%;
  height: 100vh;
  background-image: url(${fondo});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Shade = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  h1 {
    color: white;
    font-weight: 700;
  }
`;

const Section = styled.div`
  background-color: white;
  min-height: 100vh;
  padding-top: 2rem;
`;

function Home() {
  return (
    <>
      <Hero>
        <Shade>
          <HeroText>
            <h1 style={{ color: "#4b9a37" }}> DeDiez</h1>
            <h1> Integración Deportiva</h1>
          </HeroText>
          <Boton nav path="/nosotros" texto="Conocenos" />
        </Shade>
      </Hero>
      <BannerHome
        icon={faComment}
        title="REPRESENTACIÓN PROFESIONAL"
        text=" Estamos especializados en la representación de deportistas
          profesionales."
      />
      <Section>
        <h3 className="titulo text-center container-md">
          Algunos de nuestros representados
        </h3>

        <ListPlayerCard home />
      </Section>
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
