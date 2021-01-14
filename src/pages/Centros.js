import React from "react";
import styled from "styled-components";
import centros from "assets/fondos/1.jpeg";
import { Col, Jumbotron, Row } from "reactstrap";
import { imgAltoRend, imgFutsal, imgPersonal } from "assets/centros";

const InnerPage = styled.section`
  background-image: url(${centros});
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  background-position: top;
  padding: 7rem 0 2rem 0;
`;

function Centros() {
  return (
    <InnerPage>
      <Jumbotron>
        <h2 className="titulo text-left">Centros de Entrenamiento</h2>
        <ul>
          <li>
            <h4 className="sub-titulo text-right">
              Entrenamiento Personalizado
            </h4>
            <Row xs="1" md="2" lg="3">
              {imgPersonal.map((img) => {
                return (
                  <Col key={img.alt}>
                    <img
                      className="img-thumbnail"
                      src={img.src}
                      alt={img.alt}
                      height="150px"
                      width="200px"
                    />
                  </Col>
                );
              })}
            </Row>
          </li>
          <li>
            <h4 className="sub-titulo text-center">Futsal</h4>
            <Row xs="1" md="2" lg="3">
              {imgFutsal.map((img) => {
                return (
                  <Col key={img.alt}>
                    <img
                      className="img-thumbnail"
                      src={img.src}
                      alt={img.alt}
                      height="150px"
                      width="200px"
                    />
                  </Col>
                );
              })}
            </Row>
          </li>
          <li>
            <h4 className="sub-titulo text-left">Alto Rendimiento</h4>
            <Row xs="1" md="2" lg="3">
              {imgAltoRend.map((img) => {
                return (
                  <Col key={img.alt}>
                    <img
                      className="img-thumbnail"
                      src={img.src}
                      alt={img.alt}
                      height="150px"
                      width="200px"
                    />
                  </Col>
                );
              })}
            </Row>
          </li>
        </ul>
      </Jumbotron>
    </InnerPage>
  );
}

export default Centros;
