import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";
import imagen from "assets/jyg.png";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function JugadasyGoles() {
  return (
    <InnerPage>
      <Jumbotron className="text-center">
        <img
          className="d-block mx-auto "
          src={imagen}
          alt="Jugadas y Goles"
          height="100px"
        />
        <div className="titulo"></div>

        <p className="text-left">
          Jugadas y Goles es una app destinada a comunicar, compartir y exponer
          jugadas, goles, jueguitos y entrenamientos personales y/o grupales.
          <br /> Te gusta compartir con tus amigos, familiares, colegas tus
          Jugadas y Goles ???
          <br />
          Este es el lugar para mostrar tu potencial, tus cualidades, tus
          destrezas, tus habilidades, tus virtudes. En ella podes archivar y
          compartir tus contenidos. Es una app que ocupa muy poco espacio y es
          muy funcional e interactiva.
          <br />
          Ademas cuenta con las ultimas Noticias y Portadas de fútbol, las
          cuales se actualizan diariamente, para que siempre estes informado.
          <br />
          Comenzá esta nueva aventura y hazte conocer en el mundo, tal vez
          alguien te esté necesitando.
          <br />
          Descargate de forma gratuita la APP y suscribite para comenzar a subir
          tus Jugadas y Goles.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.movilgate.futvideo&hl=es_419&gl=US"
          target="_blank"
          rel="noreferrer"
          style={{
            fontWeight: "700",
            padding: "0.5rem 0.8rem",
            backgroundColor: "#4b9a37",
            color: "var(--light)",
            textAlign: "center",
            maxWidth: "9rem",
          }}
        >
          Link a Play Store
        </a>
      </Jumbotron>
    </InnerPage>
  );
}

export default JugadasyGoles;
