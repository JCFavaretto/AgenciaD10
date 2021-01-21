import React from "react";
import styled from "styled-components";
import { Col, Jumbotron, Row } from "reactstrap";
import { imgAltoRend, imgFutsal, imgPersonal } from "assets/centros";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Centros() {
  return (
    <InnerPage>
      <Jumbotron>
        <h4 className="sub-titulo text-center">Entrenamiento Personalizado</h4>
        <Row xs="1" md="2" lg="2" xl="3">
          {imgPersonal.map((img) => {
            return (
              <Col key={img.alt}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={img.src}
                        alt={img.alt}
                        height="250px"
                        width="300px"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h4>{img.name} </h4>
                      <p>Dirección: {img.direccion} </p>
                      <p>Horarios: {img.horarios} </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <h4 className="sub-titulo text-center">Cancha de Futsal</h4>
        <Row xs="1" md="2" lg="2" xl="3">
          {imgFutsal.map((img) => {
            return (
              <Col key={img.alt}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={img.src}
                        alt={img.alt}
                        height="250px"
                        width="300px"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h4>{img.name} </h4>
                      <p>Dirección: {img.direccion} </p>
                      <p>Horarios: {img.horarios} </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <h4 className="sub-titulo text-center">Cancha de Alto Rendimiento</h4>
        <Row xs="1" md="2" lg="2" xl="3">
          {imgAltoRend.map((img) => {
            return (
              <Col key={img.alt}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={img.src}
                        alt={img.alt}
                        height="250px"
                        width="300px"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h4>{img.name} </h4>
                      <p>Dirección: {img.direccion} </p>
                      <p>Horarios: {img.horarios} </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Jumbotron>
    </InnerPage>
  );
}

export default Centros;
