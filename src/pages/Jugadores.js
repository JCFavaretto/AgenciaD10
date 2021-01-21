import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";
import j1a from "assets/jugadores/j1-a.jfif";
import j1b from "assets/jugadores/j1-b.jfif";
import j2a from "assets/jugadores/j2-a.jfif";
import j2b from "assets/jugadores/j2-b.jfif";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const imgs = [
  {
    original: j1a,
    alt: "Alejo",
  },
  {
    original: j1b,
    alt: "Alejo",
  },
  {
    original: j2a,
    alt: "Tomas",
  },
  {
    original: j2b,
    alt: "Tomas",
  },
];

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Jugadores() {
  return (
    <InnerPage>
      <Jumbotron>
        <h3 className="titulo text-center">Jugadores Representados</h3>

        <ImageGallery items={imgs} />
      </Jumbotron>
    </InnerPage>
  );
}

export default Jugadores;
