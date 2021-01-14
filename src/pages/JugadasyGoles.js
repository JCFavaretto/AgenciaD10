import React from "react";
import styled from "styled-components";
import centros from "assets/fondos/2.jpeg";
import { Jumbotron } from "reactstrap";
import imagen from "assets/jyg.png";

const InnerPage = styled.section`
  background-image: url(${centros});
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  background-position: top;
  padding: 7rem 0 2rem 0;
`;

function JugadasyGoles() {
  return (
    <InnerPage>
      <Jumbotron>
        <img
          className="d-block mx-auto "
          src={imagen}
          alt="Jugadas y Goles"
          height="100px"
        />
        <div className="titulo"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          quisquam odit impedit, labore, ducimus autem incidunt quam maiores
          quis reiciendis sunt voluptatum corporis. Ad est aut libero! Cum,
          dicta est?
        </p>
      </Jumbotron>
    </InnerPage>
  );
}

export default JugadasyGoles;
