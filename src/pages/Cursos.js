import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Cursos() {
  return (
    <InnerPage>
      <Jumbotron>
        <h3 className="titulo text-center">Cursos</h3>
      </Jumbotron>
    </InnerPage>
  );
}

export default Cursos;
