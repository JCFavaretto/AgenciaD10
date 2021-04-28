import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";
import { imgAltoRend, imgFutsal, imgPersonal } from "assets/centros";
import CollapseItems from "components/CollapseItems";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Centros() {
  return (
    <InnerPage>
      <Jumbotron>
        <h3 className="titulo text-center" style={{ marginBottom: "2rem" }}>
          Nuestros centros de entrenamiento
        </h3>
        <CollapseItems
          items={imgAltoRend}
          title="Centros de Alto Rendimiento"
          open
        />
        <CollapseItems items={imgFutsal} title="Deporte Adaptado" />
        <CollapseItems items={imgPersonal} title="Futból Femenino" />
        <CollapseItems
          items={imgPersonal}
          title="Entrenamiento Personalizado"
        />
        <CollapseItems items={imgPersonal} title="Escuela de Futbol" />
      </Jumbotron>
    </InnerPage>
  );
}

export default Centros;
