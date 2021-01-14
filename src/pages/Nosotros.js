import React from "react";
import styled from "styled-components";
import centros from "assets/fondos/5.jpeg";
import { Jumbotron } from "reactstrap";

const InnerPage = styled.section`
  background-image: url(${centros});
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  background-position: top;
  padding: 7rem 0 2rem 0;
`;

function Nosotros() {
  return (
    <InnerPage>
      <Jumbotron>
        <h2 className="titulo text-left">Que hacemos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non
          quisquam adipisci. Itaque, deserunt deleniti! Porro ab molestiae,
          adipisci illum veniam praesentium expedita, natus sit est nesciunt
          laboriosam, consectetur numquam!
        </p>
        <ul>
          <li>Servicio 1</li>
          <li>Servicio 2</li>
          <li>Servicio 3</li>
        </ul>
        <h2 className="titulo text-right">Quienes somos</h2>
        <p className="text-right">Director: Dt. Martínez Olmedo Daniel </p>
      </Jumbotron>
    </InnerPage>
  );
}

export default Nosotros;
