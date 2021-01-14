import React from "react";
import styled from "styled-components";
import centros from "assets/fondos/3.jfif";
import { Card, CardImg, Col, Jumbotron, Row } from "reactstrap";
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
  background-image: url(${centros});
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  background-position: top;
  padding: 7rem 0 2rem 0;
`;

function Jugadores() {
  return (
    <InnerPage>
      <Jumbotron>
        <h2 className="titulo text-right">Jugadores Representados</h2>

        <ImageGallery items={imgs} />
      </Jumbotron>
    </InnerPage>
  );
}

export default Jugadores;
