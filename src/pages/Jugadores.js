import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";

import ListPlayerCard from "components/ListPlayerCard";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Jugadores() {
  return (
    <InnerPage>
      <Jumbotron>
        <h3 className="titulo text-center">Jugadores Representados</h3>

        <ListPlayerCard />
      </Jumbotron>
    </InnerPage>
  );
}

export default Jugadores;
